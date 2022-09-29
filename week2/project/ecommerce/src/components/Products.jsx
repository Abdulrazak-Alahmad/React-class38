import React from 'react'
import OneProduct from './Product'

export default function Products({ category, productsList, isLoading }) {
  return (
      <div className='cards'>
        {isLoading ? 'Loading' :
          <>
            {
              productsList.map((item) => {
                return <OneProduct key={item.id} item={item} />
              })
            }
          </>
        }
      </div>
  )
}