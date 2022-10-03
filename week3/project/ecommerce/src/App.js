import React from 'react';
import './App.css';
import ProductDetails from './components/product/ProductDetails'
import Home from './components/Home'
import Favourites from './components/Favourites'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FavouritesContextProvider } from './components/context/ContextFavourite'
import { CategoryContextProvider } from './components/context/ContextCategory'

function App() {
  return (
    <Router>
      < FavouritesContextProvider>
        <CategoryContextProvider>
          <Routes>
            <Route path='/' element={<Home title='Products' />} />
            <Route path='/favourites' element={<Favourites title='Favourites' />} />
            <Route path='/product/:productId' element={<ProductDetails />} />
          </Routes>
        </CategoryContextProvider>
      </ FavouritesContextProvider>
    </Router>
  );
}
export default App;