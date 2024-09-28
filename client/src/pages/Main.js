import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Main = () => {
    const { ticker } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const isValidTicker = (tick) => {
            return /^[A-Za-z]{3,5}$/.test(tick);
        };

        if (!isValidTicker(ticker)) {
            navigate("/");
        }
    }, [ticker, navigate]);

    return (
        <div>
            <h1>Main</h1>
            <h2>{ticker}</h2>
        </div>
    );
}

export default Main;