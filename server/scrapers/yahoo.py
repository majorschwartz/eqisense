from bs4 import BeautifulSoup
import requests

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
					results["earnings"] = earnings_date_range
			
			elif "52 Week Range" in label_text:
				week_range_span = item.find('fin-streamer', class_='yf-mrt107')
				if week_range_span:
					week_range_value = week_range_span.get_text()
					results["yearly_range"] = week_range_value.strip()
			
			elif "Beta (5Y Monthly)" in label_text:
				beta_span = item.find('span', class_='value')
				if beta_span:
					beta_value = beta_span.get_text()
					results["beta"] = beta_value

			elif "Market Cap (intraday)" in label_text:
				market_cap_span = item.find('fin-streamer', class_='yf-mrt107')
				if market_cap_span:
					market_cap_value = market_cap_span.get_text()
					results["market_cap"] = market_cap_value.strip()

	return results['title'], results['current_price'], results['earnings'], results['yearly_range'], results['beta'], results['market_cap']