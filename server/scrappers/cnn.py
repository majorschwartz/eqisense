from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
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

chrome_options = Options()
chrome_options.add_argument("--headless")
driver = webdriver.Chrome(options=chrome_options)

def get_cnn_info(ticker):
	req_url = f"https://widgets.tipranks.com/content/v2/cnn/smartscoresmall/index.html?ticker={ticker}"
	
	driver.get(req_url)
	
	try:
		smart_score_div = WebDriverWait(driver, 10).until(
			EC.presence_of_element_located((By.CSS_SELECTOR, "div.sc-khLCKb.bzDQcJ text.sc-dstKZu"))
		)
		smart_score = smart_score_div.text
	except TimeoutException:
		smart_score = None
	
	with open("cnn.html", "w") as f:
		f.write(driver.page_source)

	return smart_score

def get_cnn_graphs(ticker):
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

	with open("cnn_pie_chart.html", "w") as f:
		f.write(pie_chart_data)
	
	with open("cnn_main_chart.html", "w") as f:
		f.write(main_chart_data)

	return pie_chart_data, main_chart_data

# print(get_cnn_info("AAPL"))
get_cnn_graphs("AAPL")