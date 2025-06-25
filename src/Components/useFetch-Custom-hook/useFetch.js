import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    async function fetchData(fetchUrl) {
        try {
            setLoading(true);
            const response = await fetch(fetchUrl);
            const data = await response.json();
            setData(data);
            setLoading(false);
        } catch (e) {
            console.log(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    return { data, loading };
}
