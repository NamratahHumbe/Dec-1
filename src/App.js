import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Shop from './pages/Shop';
import './App.css'
function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      {/* <Shop/> */}
      <Home/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
