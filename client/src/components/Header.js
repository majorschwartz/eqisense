import React, { useState } from "react";

const Header = () => {
	const [stockName, setStockName] = useState("Apple Inc. (AAPL)");
	const [compDesc, setCompDesc] = useState("Apple Inc. is an American multinational technology company that designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories.");

	return (
		<div className="">
			<div className="header-left">
				<div className="stock-name">{stockName}</div>
				<div className="stock-desc">{compDesc}</div>
			</div>
			<div className="header-right">
				<button className="header-download">Download</button>
			</div>
		</div>
	);
}

export default Header;