import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
export default function OneProductDetails(productsList) {
    const { productId } = useParams()
    const [product, setProduct] = useState({});
    const [error, SetHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`).then(response => response.json()).then((data) => {
            setProduct(data)
        }).catch((error) => {
            SetHasError(true)
            return (error);
        });
        setTimeout(() => {
            setIsLoading(false)
          }, 500)
    }, [productId])

    return (
        <div>
            {
                error
                    ?
                    <h1>Something went wrong.</h1>
                    :isLoading ? 'Loading' :
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