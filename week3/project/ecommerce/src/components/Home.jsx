import React, { useContext } from 'react';
import Categories from './category/Categories'
import Products from './product/Products'
import Header from './Header'
import useFetch from './usefetch/useFetch';
import { catrgoryContext } from './context/ContextCategory'
export default function Home({ title }) {
    const { category } = useContext(catrgoryContext)
    const categoryList = useFetch('https://fakestoreapi.com/products/categories', [])
    const productsList = useFetch(category ? `https://fakestoreapi.com/products/category/${category}` : 'https://fakestoreapi.com/products', [category])

    return (
        <div>
            <Header title={title}></Header>
            <div className='container' >
                {categoryList.isLoading ? 'Loading' : productsList.error || categoryList.error ? <h1>Something went wrong.</h1> :
                    <>
                        <Categories category={category} categoryList={categoryList.data} />
                        <Products productsList={productsList.data} isLoading={productsList.isLoading}></Products>
                    </>
                }
            </div>
        </div>
    );
}