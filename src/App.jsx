import './App.css';
import Navbar from "./Components/navbar";
import Sidebar from "./Components/sidebar";
import Footer from "./Components/footer";
import About from "./Components/pages/About";
import { Route, Routes, useNavigate } from "react-router-dom";
import ItemDetails from "./Components/pages/ItemDetails";
import Dashboard from "./Components/pages/Dashboard";
import { useState } from 'react';
import productsData from "../products.json";
import AddNewItem from "./Components/newItemForm";


function App() {
  const [products, setProducts] = useState(productsData);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const updatedList = products.filter((currentProduct) => currentProduct.id !== id); // Filter out the item with the given id
    setProducts(updatedList); // Update the state 
  navigate("/");
  };

  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <div>
        <Routes>
          {/* Pass products and setProducts to ItemDetails */}
          <Route
            path='/'
            element={<Dashboard products={products} handleDelete={handleDelete} />}
          />
          <Route
            path='/item/:itemId'
            element={<ItemDetails products={products} setProducts={setProducts} handleDelete={handleDelete} />}
          />
          <Route
            path='/item/new'
            element={<AddNewItem products={products} setProducts={setProducts} />}
          />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<h1>404 <br /> page not found</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
