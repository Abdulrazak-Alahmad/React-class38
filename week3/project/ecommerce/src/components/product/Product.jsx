import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FavouritesContext } from '../../context/ContextFavourite'
import heartRegular from '../../assets/heart-regular.svg'
import heartSolid from '../../assets/heart-solid.svg'
export default function Product({ item }) {
  const { title, image, description, id } = item
  const { favouritesIds, addFavouriteId, deleteFavouriteId } = useContext(FavouritesContext)
  return (
    <div className='one--item'>
      <button className='favouriteIcon'
        onClick={
          favouritesIds.some((item) => item === id)
            ? () => deleteFavouriteId(id)
            : () => addFavouriteId(id)
        }
      >
        {favouritesIds.some((item) => item === id) ? (
          <img src={heartSolid} alt='Favourites' />
        ) : (
          <img src={heartRegular} alt='notFavourites' />
        )}
      </button>
      <Link to={`/product/${id}`} >
        <div className='image'><img src={image} alt={description} />
        </div>
        <div className='product--title--div' ><span className='product--title'>{title}</span >
        </div>
      </Link>
    </div>
  )
}