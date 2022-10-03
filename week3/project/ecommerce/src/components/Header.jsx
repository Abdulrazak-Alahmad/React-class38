import React from 'react'
import {Link } from 'react-router-dom'
export default function Header({title}) {
    return (
     <div className='header'>
                <div >
                    <h1>{title}</h1>
                </div>
                <div className='header--nav'>
                    <Link className='nav-link' to="/">Products</Link>
                    <Link  className='nav-link' to="/favourites">Favourites</Link>
                </div>
            </div>
        
  )
}
