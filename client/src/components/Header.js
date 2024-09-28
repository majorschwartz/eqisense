import "Components.css";
import React, { useState } from "react";

const Header = () => {
	const [stockName, setStockName] = useState("Apple Inc. (AAPL)");
	const [stockPrice, setStockPrice] = useState("$150.00");

	return (
		<div className="header-container">
			<div className="header-left">
				<div className="stock-name">{stockName}</div>
				<div className="stock-price">{stockPrice}</div>
			</div>
			<div className="header-right">
				<button className="header-download">Download</button>
			</div>
		</div>
	);
}

export default Header;