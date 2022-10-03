import React, { createContext, useState, useEffect } from 'react'
export const favouritesContext = createContext()

export const FavouritesContextProvider = ({ children }) => {
    const [FavouritesIds, setFavouritesIds] = useState([])
    const [urlsFavourites, setUrlsFavourites] = useState(
        FavouritesIds.map((id) => `https://fakestoreapi.com/products/${id}`)
    );

    useEffect(() => {
        setUrlsFavourites(
            FavouritesIds.map((id) => `https://fakestoreapi.com/products/${id}`)
        );
    }, [FavouritesIds]);

    const addFavouriteId = (id) => {
        setFavouritesIds((prevState) => [...prevState, id]);
    }
    const deleteFavouriteId = (id) => {
        setFavouritesIds(FavouritesIds.filter((item) => item !== id));
    };

    const value = { FavouritesIds, setFavouritesIds, addFavouriteId, deleteFavouriteId, urlsFavourites }
    return (
        <favouritesContext.Provider value={value}>
            {children}
        </favouritesContext.Provider>
    )
}