import React, { useState } from "react";

const Metrics = () => {
	const [marketCap, setMarketCap] = useState("1.2T");
	const [currPrice, setCurrPrice] = useState("$150.00");
	const [earningRange, setEarningRange] = useState("Oct 2nd 2024 - Oct 4th 2024");
	const [beta, setBeta] = useState("1.25");
	const [yearlyHigh, setYearlyHigh] = useState("$155.00");
	const [yearlyLow, setYearlyLow] = useState("$120.00");




	return (
		<div>
			<div className="metrics-container">
				<div className="metrics-item">
					<div className="metrics-label">Market Cap</div>
					<div className="metrics-value">{marketCap}</div>
				</div>
				<div className="metrics-item">
					<div className="metrics-label">Current Price</div>
					<div className="metrics-value">{currPrice}</div>
				</div>
				<div className="metrics-item">
					<div className="metrics-label">Earning Range</div>
					<div className="metrics-value">{earningRange}</div>
				</div>
				<div className="metrics-item">
					<div className="metrics-label">Beta</div>
					<div className="metrics-value">{beta}</div>
				</div>
				<div className="metrics-item">
					<div className="metrics-label">52 Week High/Low</div>
					<div className="metrics-value">{yearlyHigh} - {yearlyLow}</div>
				</div>
			</div>
		</div>
	);
}

export default Metrics;