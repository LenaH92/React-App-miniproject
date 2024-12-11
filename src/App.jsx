// import { useState } from 'react';

import './App.css';
import Navbar from "./Components/navbar";
import Sidebar from "./Components/sidebar";
import Footer from "./Components/footer"; 
//
//import { useState, useEffect } from 'react'

  


function App() {

  /* const [data, setData] = useState({})

  useEffect(() => {
    fetch("https://gist.github.com/ironhack-edu/8b7c90c909f70039e9f21c8ee191b0e5")
    .then(res => res.json())
    .then(data => setData(data))
  }, []) */


  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
    
  )
}

export default App
