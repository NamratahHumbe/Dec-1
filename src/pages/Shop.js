import React from 'react'
import Pagename from '../components/Pagename'
import PriceFilter from '../components/PriceFilter'
import SizeFilter from '../components/SizeFilter'
import ColorFilter from '../components/ColorFilter'
function Shop() {
  return (  
   <div>
      <Pagename name='OUR SHOP'/>
            <div className="col-lg-3 col-md-12">
                <PriceFilter/>
                <ColorFilter/>
                <SizeFilter/>
            </div>
   </div>
  )
}

export default Shop