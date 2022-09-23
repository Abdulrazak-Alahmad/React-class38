import React from 'react'
import Category from './Category'
import categoryList from '../fake-data/all-categories'
export default function Categories({ handlecategory ,category}) {
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