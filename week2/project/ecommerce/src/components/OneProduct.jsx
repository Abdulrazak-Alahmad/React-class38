import React from 'react'
import { Link } from 'react-router-dom'
export default function OneProducts({ item }) {
  const { title, image, description, id } = item
  return (
    <div className='one--item'>
      <Link to={`/product/${id}`}  >
        <div className='image'><img src={image} alt={description} />
        </div>
        <div className='product--title--div' ><span className='product--title'>{title}</span >
        </div>
      </Link>
    </div>
  )
}