import React, { useContext } from 'react'
import { catrgoryContext } from '../context/ContextCategory'
export default function Category({ item }) {
  const { category, setCategory } = useContext(catrgoryContext)
  return (
    <div className={category === item ? "categories--item categories--item-selected" : "categories--item"} onClick={() => setCategory(item)}
    >{item}</div>
  )
}