import React from 'react'
import Category from './Category'
export default function Categories({ handlecategory ,category,categoryList}) {
  return (
    <>
      <div className='categories'>
        {categoryList.map((item,index) => {
          return <Category key={index} item={item} handlecategory={handlecategory} category={category}/>
        })}
      </div>
    </>
  )
}