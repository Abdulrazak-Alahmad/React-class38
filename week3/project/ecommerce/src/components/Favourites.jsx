import React, { useContext } from 'react'
import { favouritesContext } from './context/ContextFavourite'
import Products from './product/Products'
import Header from './Header'
import useFetchUrlsFavourites from './usefetch/useFetchUrlsFavourites'
export default function Favourites({ title }) {
    const { urlsFavourites } = useContext(favouritesContext)
    const { data, isLoading, error } = useFetchUrlsFavourites(urlsFavourites)
    return (
        <div>
            <Header title={title}/>
            {isLoading ?
                'Loading'
                :
                error ?
                    <h1>Something went wrong.</h1>
                    :
                    <>
                        {data.length > 0 ?
                            (
                                <Products productsList={data} isLoading={isLoading}></Products>
                            )
                            :
                            (
                                <p>You haven't chosen any favourites yet!</p>
                            )
                        }
                    </>}
        </div>
    )
}