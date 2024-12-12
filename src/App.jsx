// import { useState } from 'react';

import './App.css';
import Navbar from "./Components/navbar";
import Sidebar from "./Components/sidebar";
import Footer from "./Components/footer"; 
import List from "./Components/List"
import About from "./Components/pages/About"

//
//import { useState, useEffect } from 'react'

  


function App() {


  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      {/* <List /> put in the dahsboard */}
      <About></About>
      <Footer />
      
    </div>
    
    
  )
}

export default App
