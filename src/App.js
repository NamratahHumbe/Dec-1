import React from 'react';
//import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ShopDetails from './pages/ShopDetails';
import Checkout from './pages/Checkout';
import './App.css'
import Shoppingcart from './pages/Shoppingcart';
import Page404 from './components/Page404';
function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      {/* <Dropdown/> */}
     
      {/* <Checkout/> */}
      {/* <Shoppingcart/> */}
      {/* <ShopDetails/> */}
      {/* <Shop/> */}
      {/* <Home/>  */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
