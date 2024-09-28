from openai import OpenAI
import json
from config import OPENAI_API_KEY

client = OpenAI(api_key=OPENAI_API_KEY)

def get_company_desc(company_name):
	prompt = f"""Given the company name, write a brief description of what the company is. Return it in the following JSON format:
	
	{{
		"description": <description>
	}}
	
	Company Name:
	{company_name}
	"""

	response = client.chat.completions.create(
		model="gpt-4o-mini",
		messages=[{"role": "user", "content": prompt}],
		max_tokens=200,
		response_format={ "type": "json_object" }
		)
	
	# Parse the JSON response
	response_data = json.loads(response.choices[0].message.content)
	
	# Extract the description
	description = response_data.get("description")
	
	return description