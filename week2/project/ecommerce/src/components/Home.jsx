import React, { useState, useEffect } from 'react';
import Categories from './Categories'
import Products from './Products'

export default function Home() {
    const [category, setCategory] = useState('')
    const [categoryList, setCategoryList] = useState([])
    const [productsList, setProductsList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => { //fetch categories
        async function fetchCategories() {
            try {
                const response = await fetch(
                    'https://fakestoreapi.com/products/categories'
                );
                const data = await response.json();
                setCategoryList(data)
                setError(false)
                setIsLoading(false)
            } catch (error) {
                setError(true)
                return (error);
            }
        };
        fetchCategories();
    }, [])

    useEffect(() => { //fetch products
        async function fetchProducts() {
            try {
                const response = await fetch(
                    'https://fakestoreapi.com/products'
                );
                const data = await response.json();
                category ? setProductsList(data.filter(item => item.category === category)) : setProductsList(data);
                setError(false)
            } catch (error) {
                setError(true)
                return (error);
            }
        };
        fetchProducts();

    }, [category])
    const handlecategory = (item) => {
        setCategory(item)
    }
    return (
        <div>
            <div>
                <h1>Products</h1>
            </div>
            <div className='container' >
                {isLoading ? 'Loading' :
                    <>
                        <Categories handlecategory={handlecategory} category={category} categoryList={categoryList} />
                        <Products category={category} productsList={productsList} isLoading={isLoading}></Products>
                        {error && <h1>Something went wrong.</h1>}
                    </>
                }
            </div>
        </div>
    );
}