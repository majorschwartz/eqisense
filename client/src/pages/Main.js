import Header from "components/Header";
import Metrics from "components/Metrics";
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStockData } from "utils/api";

const Main = () => {
    const { ticker } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const isValidTicker = (tick) => {
            return /^[A-Za-z]{3,5}$/.test(tick);
        };

        if (!isValidTicker(ticker)) {
            navigate("/");
        } else {
			getStockData(ticker);
		}
    }, [ticker, navigate]);

    return (
        <div>
            <Header />
            <Metrics />
        </div>
    );
}

export default Main;