from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from urllib.parse import quote
from bs4 import BeautifulSoup
import requests
import json
import re

# # Replace the existing driver initialization with this:
# chrome_options = Options()
# # chrome_options.add_argument("--headless")
# driver = webdriver.Chrome(options=chrome_options)

# def get_yahoo_news(ticker):
# 	req_url = f"https://finance.yahoo.com/quote/{ticker}"
	
# 	driver.get(req_url)

# 	# getting the news
# 	try:
# 		title_h1 = WebDriverWait(driver, 5).until(
# 			EC.presence_of_element_located((By.CSS_SELECTOR, "h1.yf-xxbei9"))
# 		)
# 		title = title_h1.text
# 	except TimeoutException:
# 		title = None
	
# 	return title

# print(get_yahoo_news("AAPL"))

def get_yahoo_basic_info(ticker):
	req_url = f"https://finance.yahoo.com/quote/{ticker}"
	
	response = requests.get(req_url).text

	parsed_html = BeautifulSoup(response, 'html.parser')

	results = {}

	# getting the title
	results['title'] = parsed_html.find('h1', class_='yf-xxbei9').text

	# getting the current price
	fin_streamer = parsed_html.find('fin-streamer', class_='livePrice yf-1tejb6', attrs={'data-symbol': ticker})
	results['current_price'] = fin_streamer.find('span').text

	list_items = parsed_html.find_all('li', class_='yf-mrt107')

	for item in list_items:
		label = item.find('span', class_='label')
		
		if label:
			label_text = label.get_text()
			
			# Find the value based on the label
			if "Earnings Date" in label_text:
				earnings_date_span = item.find('span', class_='value')
				if earnings_date_span:
					earnings_date_range = earnings_date_span.get_text()
					results["Earnings Date"] = earnings_date_range
			
			elif "52 Week Range" in label_text:
				week_range_span = item.find('fin-streamer', class_='yf-mrt107')
				if week_range_span:
					week_range_value = week_range_span.get_text()
					results["52 Week Range"] = week_range_value.strip()
			
			elif "Beta (5Y Monthly)" in label_text:
				beta_span = item.find('span', class_='value')
				if beta_span:
					beta_value = beta_span.get_text()
					results["Beta (5Y Monthly)"] = beta_value

			elif "Market Cap (intraday)" in label_text:
				market_cap_span = item.find('fin-streamer', class_='yf-mrt107')
				if market_cap_span:
					market_cap_value = market_cap_span.get_text()
					results["Market Cap (intraday)"] = market_cap_value.strip()

	return results

def get_google_news(ticker):
	req_url = f"https://www.google.com/search?q={ticker}+recent+news&tbm=nws"
	
	response = requests.get(req_url).text

	parsed_html = BeautifulSoup(response, 'html.parser')

	news_titles = parsed_html.find_all('div', class_='BNeawe vvjwJb AP7Wnd')

	for title in news_titles:
		print(title.text)
	

# print(get_yahoo_basic_info("NVDA"))
get_google_news("AAPL")