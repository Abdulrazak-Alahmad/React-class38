import React, { createContext, useState } from 'react'

export const CatrgoryContext = createContext()
export const CategoryContextProvider = ({ children }) => {
    const [category, setCategory] = useState('')
    
    return (
        <CatrgoryContext.Provider value={{ category,setCategory }}>
            {children}
        </CatrgoryContext.Provider>
    )
}