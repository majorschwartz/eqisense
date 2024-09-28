from fastapi import APIRouter, Request
from fastapi.responses import JSONResponse

router = APIRouter()

@router.get("/stock/{ticker}")
async def get_stock(ticker: str):
    return JSONResponse(content={"ticker": ticker}, status_code=200)
