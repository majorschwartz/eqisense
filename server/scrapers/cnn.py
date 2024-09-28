from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By

chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.page_load_strategy = "eager"
driver = webdriver.Chrome(options=chrome_options)

def get_cnn_data(ticker):
	req_url = f"https://www.cnn.com/markets/stocks/{ticker}"

	driver.get(req_url)

	try:
		pie_chart = WebDriverWait(driver, 10).until(
			EC.presence_of_element_located((By.CSS_SELECTOR, ".markets-d3-donut"))
		)
		pie_chart_data = pie_chart.get_attribute("outerHTML")
	except TimeoutException:
		pie_chart_data = None

	try:
		main_chart = WebDriverWait(driver, 3).until(
			EC.presence_of_element_located((By.CSS_SELECTOR, ".chart.cnn-pcl-14hekau svg"))
		)
		main_chart_data = main_chart.get_attribute("outerHTML")
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
			'buy': buy_value,
			'hold': hold_value,
			'sell': sell_value
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

print(get_cnn_data("TSLA"))