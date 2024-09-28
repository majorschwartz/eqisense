from fastapi import APIRouter
from fastapi.responses import JSONResponse
from starlette.concurrency import run_in_threadpool
from scrapers.yahoo import get_yahoo_basic_info
from scrapers.cnn import get_cnn_data
from scrapers.google import get_google_news, get_analyst_rating
from sentiment.risk import get_sentiment
from description.gen import get_company_desc

router = APIRouter()

@router.get("/stock/{ticker}")
async def get_stock(ticker: str):
    print("Getting stock data for", ticker)
    title, current_price, earnings, yearly_range, beta, market_cap = await run_in_threadpool(get_yahoo_basic_info, ticker=ticker)
    print("Got Yahoo basic info")
    pie_chart_data, main_chart_data, values, total_revenue = await run_in_threadpool(get_cnn_data, ticker=ticker)
    print("Got CNN data")
    news_title_list = await run_in_threadpool(get_google_news, ticker=ticker)
    print("Got Google news")
    sentiment_score, reasoning = await run_in_threadpool(get_sentiment, news_title_list=news_title_list)
    print("Got sentiment")
    analyst_rating = await run_in_threadpool(get_analyst_rating, ticker=ticker)
    print("Got analyst rating")
    description = await run_in_threadpool(get_company_desc, company_name=title)
    print("Got company description")

    return JSONResponse(content={
        "title": title,
        "company_desc": description,
        "current_price": current_price,
        "earnings": earnings,
        "yearly_range": yearly_range,
        "beta": beta,
        "market_cap": market_cap,
        "pie_chart": pie_chart_data,
        "main_chart": main_chart_data,
        "values": values,
        "total_revenue": total_revenue,
        "sentiment_score": sentiment_score,
        "sentiment_reasoning": reasoning,
        "analyst_rating": int(analyst_rating)}, status_code=200)