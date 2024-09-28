import "Components.css";
import React from "react";

const Metrics = ({ data }) => {
	return (
		<div className="metrics-container">
			<div className="metrics-left">
				<h3>Company Description</h3>
				<p>{data.company_desc}</p>
			</div>
			<div className="metrics-right">
				<h3>Key Stock Statistics</h3>
				<div className="metrics-grid">
					<div className="metrics-item">
						<div className="metrics-label">Market Cap</div>
						<div className="metrics-value">{data.market_cap}</div>
					</div>
					<div className="metrics-item">
							<div className="metrics-label">Earning Range</div>
							<div className="metrics-value">{data.earnings}</div>
					</div>
					<div className="metrics-item">
						<div className="metrics-label">Beta</div>
						<div className="metrics-value">{data.beta}</div>
					</div>
					<div className="metrics-item">
						<div className="metrics-label">52 Week High/Low</div>
						<div className="metrics-value">{data.yearly_range}</div>
					</div>
					<div className="metrics-item">
						<div className="metrics-label">Total Revenue</div>
						<div className="metrics-value">{data.total_revenue}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Metrics;