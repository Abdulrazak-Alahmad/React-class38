import React from 'react'
import Category from './Category'

export default function Categories({ category, categoryList }) {

  return (
    <div className='categories'>
      {categoryList.map((item) => {
        return <Category key={item} item={item} category={category} />
      })}
    </div>
  )
}