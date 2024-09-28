import requests
from bs4 import BeautifulSoup
import re

def get_google_news(ticker):
	req_url = f"https://www.google.com/search?q={ticker}+recent+news&tbm=nws"
	
	response = requests.get(req_url).text

	parsed_html = BeautifulSoup(response, 'html.parser')

	news_titles = parsed_html.find_all('div', class_='BNeawe vvjwJb AP7Wnd')

	return [title.text for title in news_titles]

def get_analyst_rating(ticker):
	req_url = f"https://www.google.com/search?q=analysis+score+{ticker}+site%3Atipranks.com"

	response = requests.get(req_url).text

	parsed_html = BeautifulSoup(response, 'html.parser')

	result_descs = parsed_html.find_all('div', class_='BNeawe s3v9rd AP7Wnd')

	for desc in result_descs:
		text = desc.text
		match = re.search(r'has a Smart Score of (\d+|N/A)', text)
		if match:
			score = match.group(1)
			return score if score != "N/A" else None
		else:
			print("No match found")

	return None