const apiUrl = process.env.REACT_APP_API_ENDPOINT;

export const getStockData = async (ticker) => {
    const response = await fetch(`${apiUrl}/stock/${ticker}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
};