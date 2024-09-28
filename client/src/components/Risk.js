import React from "react";
import Card from "./Card";

const Risk = ({ analyst_score, in_the_week_score }) => {
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
		</div>
	);
}

export default Risk;