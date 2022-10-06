import React from 'react';
import { useParams } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
import useFetch from '../../usefetch/useFetch';
export default function ProductDetails() {
    const { productId } = useParams()
    const product = useFetch(`https://fakestoreapi.com/products/${productId}`, [productId])

    return (
        <div>
            {
                product.error
                    ?
                    <h1>Something went wrong.</h1>
                    : product.isLoading ? <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="66"
                        visible={true}
                    /> :
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