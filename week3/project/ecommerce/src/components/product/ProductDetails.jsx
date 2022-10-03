import React from 'react';
import { useParams } from 'react-router-dom'
import useFetch from '../usefetch/useFetch';
export default function OneProductDetails(productsList) {
    const { productId } = useParams()
    const product = useFetch(`https://fakestoreapi.com/products/${productId}`, [productId])

    return (
        <div>
            {
                product.error
                    ?
                    <h1>Something went wrong.</h1>
                    : product.isLoading ? 'Loading' :
                        <>
                            <h1>{product.data.title}</h1>
                            <div className='product--details'>
                                <div className='product--description'>
                                    <p>{product.data.description}</p>
                                </div>
                                <div className='product--image'>
                                    <img src={product.data.image} alt={product.data.description} />
                                </div>
                            </div>
                        </>
            }
        </div>
    )
}