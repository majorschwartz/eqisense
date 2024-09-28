import { useState, useEffect } from "react";
import { getStockData } from "utils/api";

const useStockData = (ticker) => {
	const [data, setData] = useState({
		title: "",
		company_desc: "",
		current_price: "",
		earnings: "",
		yearly_range: "",
		beta: "",
		market_cap: "",
		pie_chart: "",
		main_chart: "",
		values: {},
		total_revenue: "",
		sentiment_score: null,
		sentiment_reasoning: "",
		analyst_rating: null,
	});

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const retrieveStockData = async () => {
			console.log("Retrieving stock data");
			const response = await getStockData(ticker);
			console.log("Stock data retrieved");
			setData({
				title: response.title,
				company_desc: response.company_desc,
				current_price: response.current_price,
				earnings: response.earnings,
				yearly_range: response.yearly_range,
				beta: response.beta,
				market_cap: response.market_cap,
				pie_chart: response.pie_chart,
				main_chart: response.main_chart,
				values: response.values,
				total_revenue: response.total_revenue,
				sentiment_score: response.sentiment_score,
				sentiment_reasoning: response.sentiment_reasoning,
				analyst_rating: response.analyst_rating,
			});

			setLoading(false);
		}
		try {
			retrieveStockData();
		} catch (error) {
			console.error(error);
			setError("Error retrieving stock data");
			setLoading(false);
		}
    }, [ticker]);

    return {
        data,
        loading,
        error,
    };
};

export default useStockData;