import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const [ticker, setTicker] = useState("");
	const navigate = useNavigate();
	const handleSubmit = (tick) => {
		navigate(`/${tick.toUpperCase()}`);
	};

	const popularTickers = ["AAPL", "GOOG", "MSFT", "AMZN", "META", "TSLA", "NVDA", "ADBE", "NFLX"];

	return (
		<div className="home-page">
			<div className="title">
				<span>Eqisense</span>
			</div>
			<div className="main-content">
				<div className="main-text">
					<span>Enter a stock ticker...</span>
				</div>
				<input
					type="text"
					value={ticker}
					onChange={(e) => setTicker(e.target.value)}
				/>
				<div className="popular-tickers">
					<span>Popular Tickers</span>
					{popularTickers.map((ticker) => (
						<div className="popular-ticker" key={ticker} onClick={() => handleSubmit(ticker)}>
							{ticker}
						</div>
					))}
				</div>
				<div className="search-button">
					<button onClick={() => handleSubmit(ticker)}>Search</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
