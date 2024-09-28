from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup

chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.page_load_strategy = "eager"
driver = webdriver.Chrome(options=chrome_options)

def get_cnn_data(ticker):
	req_url = f"https://www.cnn.com/markets/stocks/{ticker}"

	driver.get(req_url)

	try:
		# Wait for the pie chart to load and update
		WebDriverWait(driver, 15).until(
			lambda d: d.find_element(By.CSS_SELECTOR, ".markets-d3-donut") and
			not all(path.get_attribute("fill") == "#BCBCBC" for path in d.find_elements(By.CSS_SELECTOR, ".markets-d3-donut path"))
		)
		pie_chart = driver.find_element(By.CSS_SELECTOR, ".markets-d3-donut")
		pie_chart_data = pie_chart.get_attribute("outerHTML")
	except TimeoutException:
		pie_chart_data = None

	try:
		# Wait for the main chart to load and contain "Current Price"
		WebDriverWait(driver, 3).until(
			lambda d: d.find_element(By.CSS_SELECTOR, ".chart.cnn-pcl-14hekau svg") and
			"Current Price" in d.find_element(By.CSS_SELECTOR, ".chart.cnn-pcl-14hekau svg").get_attribute("outerHTML")
		)
		main_chart = driver.find_element(By.CSS_SELECTOR, ".chart.cnn-pcl-14hekau svg")
		main_chart_data = main_chart.get_attribute("outerHTML")

		# Remove g tags with class names "x-axis-left" and "x-axis-right"
		soup = BeautifulSoup(main_chart_data, 'html.parser')
		for axis in soup.select('g.x-axis-left, g.x-axis-right'):
			axis.decompose()
		main_chart_data = str(soup)
	except TimeoutException:
		main_chart_data = None

	try:
		# Wait for the list that contains the buy/hold/sell values
		ul_element = WebDriverWait(driver, 3).until(
			EC.presence_of_element_located((By.CSS_SELECTOR, "ul.markets-donut-chart__legend"))
		)

		# Extract the individual values for buy, hold, and sell
		buy_value = ul_element.find_element(By.CSS_SELECTOR, "#markets-donut-chart__legend--key-value-buy").text
		hold_value = ul_element.find_element(By.CSS_SELECTOR, "#markets-donut-chart__legend--key-value-hold").text
		sell_value = ul_element.find_element(By.CSS_SELECTOR, "#markets-donut-chart__legend--key-value-sell").text

		# Put them into a dictionary and return
		values = {
			'buy': buy_value.replace("%", ""),
			'hold': hold_value.replace("%", ""),
			'sell': sell_value.replace("%", "")
		}
	except TimeoutException:
		values = None

	try:
		revenue_element = WebDriverWait(driver, 3).until(
			EC.presence_of_element_located((By.CSS_SELECTOR, ".market-financial-table__row-153LbB"))
		)
		total_revenue = revenue_element.find_element(By.CSS_SELECTOR, ".market-financial-table__text").text.strip()
	except TimeoutException:
		total_revenue = None

	return pie_chart_data, main_chart_data, values, total_revenue