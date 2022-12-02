import React from 'react'
import Pagename from '../components/Pagename'
import ApplyCoupon from '../components/ApplyCoupon'
import CartSummary from '../components/CartSummary'
import CartInfo from '../components/CartInfo'

function Shoppingcart() {
  return (
    <div>
        <Pagename name='CHECKOUT' />
        <div className="container-fluid pt-5">
            <div className="row px-xl-5">
              <CartInfo/>
                <div className="col-lg-4">
                <ApplyCoupon/>
                <CartSummary/>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Shoppingcart