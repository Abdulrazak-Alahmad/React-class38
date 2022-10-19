import React from 'react'
import OneProduct from './Product'
import { RotatingLines } from 'react-loader-spinner'

export default function Products({ productsList, isLoading }) {

  return (
    <div className='cards'>
      {isLoading ? <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="66"
        visible={true}
      /> :
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