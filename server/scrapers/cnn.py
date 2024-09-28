from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By

chrome_options = Options()
chrome_options.add_argument("--headless")
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
		main_chart = WebDriverWait(driver, 10).until(
			EC.presence_of_element_located((By.CSS_SELECTOR, ".chart.cnn-pcl-14hekau svg"))
		)
		main_chart_data = main_chart.get_attribute("outerHTML")
	except TimeoutException:
		main_chart_data = None

	try:
		# Wait for the list that contains the buy/hold/sell values
		ul_element = WebDriverWait(driver, 10).until(
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

	return pie_chart_data, main_chart_data, values