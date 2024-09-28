from openai import OpenAI
import json
from config import OPENAI_API_KEY

client = OpenAI(api_key=OPENAI_API_KEY)

def get_sentiment(news_title_list):
	news_title_string = "\n".join(news_title_list)

	prompt = f"""Given the following news titles, determine the overall sentiment of the market when it comes to the given company. Return the sentiment as a number between 0 and 10, where 0 is negative and 10 is positive. Also, return the reasoning for the sentiment score, but keep it short. Return it in the following JSON format:
	
	{{
		"sentiment": <sentiment_score>,
		"reasoning": <reasoning>
	}}
	
	News Titles:
	{news_title_string}
	"""

	response = client.chat.completions.create(
		model="gpt-4o-mini",
		messages=[{"role": "user", "content": prompt}],
		max_tokens=200,
		response_format={ "type": "json_object" }
		)
	
	# Parse the JSON response
	response_data = json.loads(response.choices[0].message.content)
	
	# Extract the sentiment score
	sentiment_score = response_data.get("sentiment")
	reasoning = response_data.get("reasoning")
	
	return sentiment_score, reasoning