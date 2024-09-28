import Graphs from "components/Graphs";
import Header from "components/Header";
import Metrics from "components/Metrics";
import Risk from "components/Risk";
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useStockData from "hooks/useStockData";

const Main = () => {
    const { ticker } = useParams();
    const navigate = useNavigate();
    const { data, loading, error } = useStockData(ticker);

    useEffect(() => {
        const isValidTicker = (tick) => {
            return /^[A-Za-z]{1,5}$/.test(tick);
        };

        if (!isValidTicker(ticker)) {
            navigate("/");
        }
    }, [ticker, navigate]);

    return (
        <div className="main-container">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {!loading && !error && data && (
                <>
                    <Header data={data} />
                    <Metrics data={data} />
                    <Risk data={data} />
                    <Graphs data={data} />
                </>
            )}
        </div>
    );
}

export default Main;