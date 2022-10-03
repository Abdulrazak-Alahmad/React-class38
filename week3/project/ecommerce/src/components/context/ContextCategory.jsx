import React, { createContext, useState } from 'react'
export const catrgoryContext = createContext()

export const CategoryContextProvider = ({ children }) => {
    const [category, setCategory] = useState('')
    const value = { category,setCategory }
    return (
        <catrgoryContext.Provider value={value}>
            {children}
        </catrgoryContext.Provider>
    )
}