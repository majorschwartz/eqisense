import "Components.css";
import React from "react";

const Header = ({ data, handleCaptureClick }) => {
	return (
		<div className="header-container">
			<div className="header-left">
				<div className="stock-name">{data.title}</div>
				<div className="stock-price">{data.current_price}</div>
				<div className="stock-price-label">Current Price</div>
			</div>
			<div className="header-right">
				<button className="header-download" onClick={handleCaptureClick}>
					<svg
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="24px"
						height="24px"
					>
						<g
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						>
							<path d="M14 3v4a1 1 0 0 0 1 1h4" />
							<path
								d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2m-5-4v-6"
							/>
							<path d="M9.5 14.5L12 17l2.5-2.5" />
						</g>
					</svg>
					Download
				</button>
			</div>
		</div>
	);
}

export default Header;