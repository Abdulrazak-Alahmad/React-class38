import React,{useContext} from 'react'
import {Link } from 'react-router-dom'
import { CatrgoryContext } from '../context/ContextCategory'
export default function Header({title}) {
    const { setCategory } = useContext(CatrgoryContext)
    return (
     <div className='header'>
                <div >
                    <h1>{title}</h1>
                </div>
                <div className='header--nav'>
                    <Link className='nav-link' to="/" onClick={() => setCategory('')}>Products</Link>
                    <Link  className='nav-link' to="/favourites">Favourites</Link>
                </div>
            </div>
  )
}