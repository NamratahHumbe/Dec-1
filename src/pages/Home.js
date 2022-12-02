import React from 'react';
import Feature from '../components/Feature';
import StayUpdated from '../components/StayUpdated';
import Categories from '../components/Categories';
import Offers from '../components/Offers';
import TrandyProduct from '../components/TrandyProduct';
import JustArrived from '../components/JustArrived';
import Vendor from '../components/Vendor';
function Home() {
  return (
    <div>
      <Feature/>
      <Categories/>
      <Offers/>
      <TrandyProduct name='Trandy Products'/>
      <StayUpdated/>
      <JustArrived/>
      <Vendor/>
    </div>
  )
}

export default Home