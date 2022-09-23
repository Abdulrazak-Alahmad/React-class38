import React from 'react'
import OneProduct from './OneProduct'
import productsList from '../fake-data/all-products'

export default function Products({ categoryName }) {
  const tempProducts = productsList.filter(item => item.category === categoryName)
  return (
    <>
      <div className='cards'>
        {
          categoryName ?
            <>
              {
                tempProducts.map((item) => {
                  return <OneProduct key={item.id} item={item} />
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