import React from "react";
import { useNavigate } from "react-router-dom";

const Error = ({ message }) => {
	const navigate = useNavigate();

	return (
		<div className="error-container">
			<div className="error-title">Error: {message}</div>
			<div className="try-again-text">Please try again.</div>
			<button className="try-again-button" onClick={() => navigate("/")}>Go Home</button>
		</div>
	);
}

export default Error;