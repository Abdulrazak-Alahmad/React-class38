import React, { useState } from 'react';
import './App.css';
import Categories from './components/Categories'
import Products from './components/Products'

function App() {
  const [category, setCategory] = useState('');
  const handlecategory = (item)=>{
  setCategory(item)
}
  return ( <div>
    <div>
      <h1>Products</h1>
    </div>
    <div className='container' >
     <Categories handlecategory ={handlecategory} category={category}></Categories>
     <Products categoryName  ={category.slice(6)}></Products>
    </div>
    </div>
  );
}
export default App;