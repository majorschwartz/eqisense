import React from "react";

const Card = ({ title, score }) => {
	const getLetterGrade = (score) => {
		if (score === "N/A") return "N/A";
		if (score <= 2) return 'F';
		if (score <= 4) return 'D';
		if (score <= 6) return 'C';
		if (score <= 8) return 'B';
		return 'A';
	};

	const letterGrade = getLetterGrade(score);

	return (
		<div className="card-container">
			{letterGrade !== "N/A" && (
				<>
					<img className="card-image" src={`/assets/${letterGrade}-${title}.png`} alt={`${letterGrade} ${title}`} />
					<img className="card-background" src={`/assets/${letterGrade}.jpg`} alt={letterGrade} />
				</>
			)}
			{letterGrade === "N/A" && (
				<>
					<img className="card-image" src={`/assets/NA-${title}.png`} alt="N/A" />
					<img className="card-background" src={`/assets/NA.jpg`} alt="N/A" />
				</>
			)}
		</div>
	);
}

export default Card;