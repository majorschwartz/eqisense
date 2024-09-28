import os
from dotenv import load_dotenv

load_dotenv()

ORIGIN_ENDPOINT = os.getenv("ORIGIN_ENDPOINT")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")