import { useState, useEffect } from 'react'

export default function useFetch(url, condition) {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setdata] = useState([])

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch(
                    url
                );
                const data = await response.json();
                setdata(data)
                setError(false)
                setIsLoading(false)
            } catch (error) {
                setError(true)
                return (error);
            }
        };
        fetchCategories();
    }, condition)
    return (
        { data, error, isLoading }
    )
}