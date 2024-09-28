import Header from "components/Header";
import Metrics from "components/Metrics";
import Risk from "components/Risk";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStockData } from "utils/api";

const Main = () => {
    const { ticker } = useParams();
    const navigate = useNavigate();
    const [analyst_score, setAnalystScore] = useState("4");
    const [in_the_week_score, setInTheWeekScore] = useState("10");
    const [inTheWeekDesc, setInTheWeekDesc] = useState("In the Week Description");

    // useEffect(() => {
    //     const isValidTicker = (tick) => {
    //         return /^[A-Za-z]{3,5}$/.test(tick);
    //     };

    //     if (!isValidTicker(ticker)) {
    //         navigate("/");
    //     } else {
	// 		getStockData(ticker);
	// 	}
    // }, [ticker, navigate]);

    return (
        <div className="main-container">
            <Header />
            <Metrics />
            <Risk analyst_score={analyst_score} in_the_week_score={in_the_week_score} in_the_week_desc={inTheWeekDesc} />
        </div>
    );
}

export default Main;