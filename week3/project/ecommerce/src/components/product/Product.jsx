import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { favouritesContext } from '../context/ContextFavourite'
import heartRegular from '../../assets/heart-regular.svg'
import heartSolid from '../../assets/heart-solid.svg'
export default function Product({ item }) {
  const { title, image, description, id } = item
  const { FavouritesIds, addFavouriteId, deleteFavouriteId } = useContext(favouritesContext)

  return (
    <div className='one--item asdfg'>
      <button className='favouriteIcon'
        onClick={
          FavouritesIds.some((item) => item === id)
            ? () => deleteFavouriteId(id)
            : () => addFavouriteId(id)
        }
      >
        {FavouritesIds.some((item) => item === id) ? (
          <img src={heartSolid} alt='Favourites' />
        ) : (
          <img src={heartRegular} alt='notFavourites' />
        )}
      </button>
      <div>
        <Link to={`/product/${id}`}  >
          <div className='image'><img src={image} alt={description} />
          </div>
          <div className='product--title--div' ><span className='product--title'>{title}</span >
          </div>
        </Link> </div>
    </div>
  )
}