// import { useState } from 'react';

import './App.css';
import Navbar from "./Components/navbar";
import Sidebar from "./Components/sidebar";
import Footer from "./Components/footer";
import About from "./Components/pages/About"
import { Route, Routes } from "react-router";
import ItemDetails from "./Components/pages/ItemDetails"
import Dashboard from "./Components/pages/Dashboard"
import { useState } from 'react';
import productsData from "../products.json"



function App() {
  const [products, setProducts] = useState(productsData)

  const handleDelete = (id) => {
    const updatedList = products.filter((currentProduct) => currentProduct.id !== id); // Filter out the item with the given id
    setProducts(updatedList); // Update the state
  };

  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <div>
        <Routes>
          <Route path='/' element={<Dashboard products={products} handleDelete={handleDelete}/>} />

          <Route path='/item/:itemId' element={<ItemDetails products={products}/>} />

          <Route path='/about' element={<About />} />
          <Route path='*' element={<h1>404 <br /> page not found</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>


  )
}

export default App

//App has all
//Pages are bigger than components 
//homepage = dashboard 
//dashboard has a list or more components or like new h1
//(List page is a dashboard(home button)) has elements, and every element needs = Item Details which is a page! 
//Item deails need a componenet to display item