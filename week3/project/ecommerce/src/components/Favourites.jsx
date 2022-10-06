import React, { useContext } from 'react'
import { FavouritesContext } from '../context/ContextFavourite'
import Products from './product/Products'
import Header from './Header'
import { RotatingLines } from 'react-loader-spinner'
import useFetchUrlsFavourites from '../usefetch/useFetchUrlsFavourites'
export default function Favourites({ title }) {
    const { urlsFavourites } = useContext(FavouritesContext)
    const { data, isLoading, error } = useFetchUrlsFavourites(urlsFavourites)
    return (
        <div>
            <Header title={title} />
            {isLoading ?
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="66"
                    visible={true}
                />
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