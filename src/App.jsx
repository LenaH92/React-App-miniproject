import { useState } from 'react';

import './App.css';
import Navbar from "./Components/navbar";
import Sidebar from "./Components/sidebar";
import Footer from "./Components/footer"; 

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
    
  )
}

export default App
