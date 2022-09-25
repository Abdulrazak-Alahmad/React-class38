import React from 'react';
import './App.css';
import ProductDetails from './components/ProductDetails'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}
export default App;