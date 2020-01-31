import { useState } from "react"

export const useData =() => {
    const [data, setData] = useState([]);

    return (
        data,
        setData
    );
}