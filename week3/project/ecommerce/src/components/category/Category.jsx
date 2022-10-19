import React, { useContext } from 'react'
import { CatrgoryContext } from '../../context/ContextCategory'

export default function Category({ item }) {
  const { category, setCategory } = useContext(CatrgoryContext)

  return (
    <div className={category === item ? "categories--item categories--item-selected" : "categories--item"} onClick={() => setCategory(item)}
    >{item}</div>
  )
}