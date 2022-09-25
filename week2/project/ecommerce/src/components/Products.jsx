import React from 'react'
import OneProduct from './OneProduct'

export default function Products({ category  ,productsList,isLoading}) {
  return (
    <>
      <div className='cards'>
        {isLoading ? 'Loading' : category  ?
            <>
              {
                productsList.map((item) => {
                  return <OneProduct key={item.id} item={item}  />
                })
              }
            </>
            :
            <>
              {
                productsList.map((item) => {
                  return <OneProduct key={item.id} item={item} />
                })
              }
            </>
        }
      </div>
    </>
  )
}