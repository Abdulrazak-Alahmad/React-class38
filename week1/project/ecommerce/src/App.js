import React, { useState } from 'react';
import './App.css';
import Categories from './components/Categories'
import Products from './components/Products'

function App() {
  const [categoryName , setCategoryName ]= useState('')
  const [category, setCategory] = useState(null);
  const handlecategory = (item)=>{
  setCategoryName (item.slice(6))
  setCategory(item)
}
  return ( <div>
    <div>
      <h1>Products</h1>
    </div>
    <div className='container' >
     <Categories handlecategory ={handlecategory} category={category}></Categories>
     <Products categoryName  ={categoryName }></Products>
    </div>
    </div>
  );
}
export default App;