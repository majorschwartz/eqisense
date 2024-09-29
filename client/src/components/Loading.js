import React from "react";

const Loading = () => {
	return (
		<div className="loading-container">
			<div className="loading-text">Getting stock data...</div>
			<div className="loading-spinner">
				<img src={`/assets/loading.gif`} alt="Loading..." />
			</div>
		</div>
	);
}

export default Loading;