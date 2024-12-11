// import { useState } from 'react';

import './App.css';
import Navbar from "./Components/navbar";
import Sidebar from "./Components/sidebar";
import Footer from "./Components/footer"; 
import jsonData from "../products.json"
import List from "./Components/List"
import { useState } from 'react';

//
//import { useState, useEffect } from 'react'

  


function App() {
  const [data, setData] = useState(jsonData)
  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <List array={data}/>
      <Footer />
      
    </div>
    
    
  )
}

export default App
