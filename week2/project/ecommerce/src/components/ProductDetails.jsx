import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
export default function OneProductDetails(productsList) {
    const { productId } = useParams()
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    `https://fakestoreapi.com/products/${productId}`
                );
                const data = await response.json();
                setProduct(data)
                setIsLoading(false)
            } catch (error) {
                setError(true)
                return (error);
            }
        };
        fetchData();
    }, [productId])

    return (
        <div>
            {
                error
                    ?
                    <h1>Something went wrong.</h1>
                    : isLoading ? 'Loading' :
                        <>
                            <h1>{product.title}</h1>
                            <div className='product--details'>
                                <div className='product--description'>
                                    <p>{product.description}</p>
                                </div>
                                <div className='product--image'>
                                    <img src={product.image} alt={product.description} />
                                </div>
                            </div>
                        </>
            }
        </div>
    )
}