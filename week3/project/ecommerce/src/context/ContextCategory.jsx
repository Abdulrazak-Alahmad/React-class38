import React, { createContext, useState } from 'react'
export const CatrgoryContext = createContext()

export const CategoryContextProvider = ({ children }) => {
    const [category, setCategory] = useState('')
    const value = { category,setCategory }
    return (
        <CatrgoryContext.Provider value={value}>
            {children}
        </CatrgoryContext.Provider>
    )
}