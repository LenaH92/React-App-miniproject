// import { useState } from 'react';

import './App.css';
import Navbar from "./Components/navbar";
import Sidebar from "./Components/sidebar";
import Footer from "./Components/footer";
import List from "./Components/List"
import About from "./Components/pages/About"
import { Route, Routes } from "react-router";
import ItemDetails from "./Components/pages/ItemDetails"
import Dashboard from "./Components/pages/Dashboard"


function App() {


  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <div>
        <Routes>
          <Route path='/' element={<Dashboard />} />

          <Route path='/item/:itemId' element={<ItemDetails />} />

          <Route path='/about' element={<About />} />
          <Route path='*' element={<h1>404 <br /> page not found</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>


  )
}

export default App
