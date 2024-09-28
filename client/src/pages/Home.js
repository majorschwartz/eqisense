import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchIcon = () => (
	<svg
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width="24px"
		height="24px"
	>
		<path
			fill="none"
			stroke="#000000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
		/>
	</svg>
);

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
				<div className="search-container">
					<div className="input-wrapper">
						<input
							type="text"
							value={ticker}
							onChange={(e) => setTicker(e.target.value)}
							maxLength="5"
						/>
						<button className="search-icon" onClick={() => handleSubmit(ticker)}>
							<SearchIcon />
						</button>
					</div>
				</div>
				<div className="popular-tickers">
					<span>Popular Tickers</span>
					<div className="popular-ticker-grid">
						{popularTickers.map((ticker) => (
							<div className="popular-ticker" key={ticker} onClick={() => handleSubmit(ticker)}>
								{ticker}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
