import React from 'react'
import Category from './Category'
export default function Categories({ handlecategory, category, categoryList }) {
  return (
    <div className='categories'>
      {categoryList.map((item) => {
        return <Category key={item} item={item} handlecategory={handlecategory} category={category} />
      })}
    </div>
  )
}