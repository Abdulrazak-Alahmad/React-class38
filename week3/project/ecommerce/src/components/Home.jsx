import React, { useContext } from 'react';
import Categories from './category/Categories'
import Products from './product/Products'
import Header from './Header'
import useFetch from '../usefetch/useFetch';
import { CatrgoryContext } from '../context/ContextCategory'
import { RotatingLines } from 'react-loader-spinner'

export default function Home({ title }) {
    const { category } = useContext(CatrgoryContext)
    const categoryList = useFetch('https://fakestoreapi.com/products/categories', [])
    const productsList = useFetch(category ? `https://fakestoreapi.com/products/category/${category}` : 'https://fakestoreapi.com/products', [category])

    return (
        <div>
            <Header title={title}></Header>
            <div className='container' >
                {categoryList.isLoading ? <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="66"
                    visible={true}
                />
                    :
                    productsList.error || categoryList.error ?
                        <h1>Something went wrong.</h1>
                        :
                        <>
                            <Categories category={category} categoryList={categoryList.data} />
                            <Products productsList={productsList.data} isLoading={productsList.isLoading}></Products>
                        </>
                }
            </div>
        </div>
    );
}