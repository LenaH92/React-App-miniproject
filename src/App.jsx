// import { useState } from 'react';

import './App.css';
import Navbar from "./Components/navbar";
import Sidebar from "./Components/sidebar";
import Footer from "./Components/footer"; 
import List from "./Components/List"

//
//import { useState, useEffect } from 'react'

  


function App() {


  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <List />
      <Footer />
      
    </div>
    
    
  )
}

export default App
