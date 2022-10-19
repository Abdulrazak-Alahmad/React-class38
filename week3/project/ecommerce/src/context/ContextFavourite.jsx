import React, { createContext, useState, useEffect } from 'react'

export const FavouritesContext = createContext()
export const FavouritesContextProvider = ({ children }) => {
    const [favouritesIds, setFavouritesIds] = useState([])
    const [urlsFavourites, setUrlsFavourites] = useState(
        favouritesIds.map((id) => `https://fakestoreapi.com/products/${id}`)
    );

    useEffect(() => {
        setUrlsFavourites(
            favouritesIds.map((id) => `https://fakestoreapi.com/products/${id}`)
        );
    }, [favouritesIds]);

    const addFavouriteId = (id) => {
        setFavouritesIds((prevState) => [...prevState, id]);
    }
    const deleteFavouriteId = (id) => {
        setFavouritesIds(favouritesIds.filter((item) => item !== id));
    };

    return (
        <FavouritesContext.Provider value={{ favouritesIds, setFavouritesIds, addFavouriteId, deleteFavouriteId, urlsFavourites }}>
            {children}
        </FavouritesContext.Provider>
    )
}