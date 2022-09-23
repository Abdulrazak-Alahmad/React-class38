import React from 'react'
export default function Category({ item, handlecategory,category }) {
  return (
    <div className= {category === item ? "categories--item categories--item-selected": "categories--item"}  onClick={() => handlecategory(item)}
    >{item}</div>
  )
}