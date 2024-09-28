import React from "react";
import Card from "./Card";

const Risk = ({ analyst_score, in_the_week_score, in_the_week_desc }) => {
	return (
		<div className="risk-container">
			<div className="risk-title">Risk Scores</div>
			<div className="risk-cards">
				<div className="risk-card first">
					<Card title="Analyst" score={analyst_score} />
				</div>
				<div className="risk-card second">
					<Card title="Week" score={in_the_week_score} />
				</div>
			</div>
			<div className="risk-desc">
				<div className="risk-desc-title">Analyst</div>
				<div className="risk-desc-text">Top Smart Score Stocks displays the best stocks according to the <a href="https://www.tipranks.com/glossary/s/smart-score">TipRanks Smart Score</a>. This unique score measures stocks on their potential to outperform the market, based on 8 key factors. These include how the best performing analysts are rating stocks, whether hedge funds are buying or selling, as well as fundamental and technical factors.</div>
				<div className="risk-desc-title">In the Week</div>
				<div className="risk-desc-text">{in_the_week_desc}</div>
			</div>
		</div>
	);
}

export default Risk;