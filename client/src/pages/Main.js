import Header from "components/Header";
import Metrics from "components/Metrics";
import Risk from "components/Risk";
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStockData } from "utils/api";

const Main = () => {
    const { ticker } = useParams();
    const navigate = useNavigate();

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
            <Risk analyst_score={"4"} in_the_week_score={"10"} />
        </div>
    );
}

export default Main;