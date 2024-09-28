import React from "react";
import Card from "./Card";

const Risk = ({ data }) => {
	return (
		<div className="risk-container">
			<div className="risk-title">Risk Scores</div>
			<div className="risk-cards">
				<div className="risk-card first">
					<Card title="Analyst" score={data.analyst_score} />
				</div>
				<div className="risk-card second">
					<Card title="Week" score={data.sentiment_score} />
				</div>
			</div>
			<div className="risk-desc">
				<div className="risk-desc-title">Analyst</div>
				<div className="risk-desc-text">Top Smart Score Stocks displays the best stocks according to the <a href="https://www.tipranks.com/glossary/s/smart-score" target="_blank" rel="noopener noreferrer">TipRanks Smart Score</a>. This unique score measures stocks on their potential to outperform the market, based on 8 key factors. These include how the best performing analysts are rating stocks, whether hedge funds are buying or selling, as well as fundamental and technical factors.</div>
				<div className="risk-desc-title">In the Week</div>
				<div className="risk-desc-text">{data.sentiment_reasoning}</div>
			</div>
		</div>
	);
}

export default Risk;