import React from "react";

const Graphs = ({ data }) => {

	return (
		<div className="graphs-wrapper">
			<h2 className="future-forecast">Future Forecast</h2>
			<div className="graphs-container">
				<div className="graph-section">
					<div className="graph-title">Analyst Ratings</div>
					<div className="ratings-container">
						<div className="ratings">
							<div className="rating">
								<span className="rating-dot buy"></span>
								<div className="rating-title">Buy</div>
								<div className="rating-percent">{data.values.buy}%</div>
							</div>
							<div className="rating">
								<span className="rating-dot hold"></span>
								<div className="rating-title">Hold</div>
								<div className="rating-percent">{data.values.hold}%</div>
							</div>
							<div className="rating">
								<span className="rating-dot sell"></span>
								<div className="rating-title">Sell</div>
								<div className="rating-percent">{data.values.sell}%</div>
							</div>
						</div>
					</div>
					<div className="graph-container"
						dangerouslySetInnerHTML={{ __html: data.pie_chart }}
					/>
				</div>
				<div className="graph-section">
					<div className="graph-title">Future Price Movement</div>
					<div className="graph-container"
						dangerouslySetInnerHTML={{ __html: data.main_chart }}
					/>
				</div>
			</div>
		</div>
	);
}

export default Graphs;