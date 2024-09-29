import Graphs from "components/Graphs";
import Header from "components/Header";
import Metrics from "components/Metrics";
import Risk from "components/Risk";
import Loading from "components/Loading";
import Error from "components/Error";
import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useStockData from "hooks/useStockData";
import html2canvas from "html2canvas";

const Main = () => {
    const printRef = useRef();
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

    const handleCaptureClick = async () => {
        const canvas = await html2canvas(printRef.current);
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');

        if (typeof link.download === 'string') {
            link.href = dataURL;
            link.download = 'download.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(dataURL);
        }
    };

    return (
        <div className="main-container" ref={printRef}>
            {loading && <Loading />}
            {error && <Error message={error} />}
            {!loading && !error && data && (
                <>
                    <Header data={data} handleCaptureClick={handleCaptureClick} />
                    <Metrics data={data} />
                    <Risk data={data} />
                    <Graphs data={data} />
                </>
            )}
        </div>
    );
}

export default Main;