import React, { useState, useEffect } from 'react';
import Categories from './Categories'
import Products from './Products'

export default function Home() {
    const [category, setCat] = useState('')
    const [categoryList, setCategoryList] = useState([])
    const [productsList, setProductsList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, SetHasError] = useState(false)
    
    useEffect(() => { // fetch categories
        fetch('https://fakestoreapi.com/products/categories').then(response => response.json()).then((data) => {
            setCategoryList(data)
            SetHasError(false)
        }).catch((error) => {
            SetHasError(true)
            return (error);
        });
    }, [])

    useEffect(() => { //fetch products
        fetch('https://fakestoreapi.com/products').then(response => response.json()).then((data) => {
            category ? setProductsList(data.filter(item => item.category === category)) : setProductsList(data);
            SetHasError(false)
        }).catch((error) => {
            SetHasError(true)
            return (error);
        });
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [category])
    const handlecategory = (item) => {
        setCat(item)
    }
    return (
        <div>
            <div>
                <h1>Products</h1>
            </div>
            <div className='container' >
                <Categories handlecategory={handlecategory} category={category} categoryList={categoryList} />
                <Products category={category} productsList={productsList} isLoading={isLoading}></Products>
                {hasError ? <h1>Something went wrong.</h1> : ''}
            </div>
        </div>
    );
}