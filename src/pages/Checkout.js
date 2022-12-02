import React from 'react'
import Pagename from '../components/Pagename'
import BillingAddress from '../components/BillingAddress'
import OrderTotal from '../components/OrderTotal'
import Payment from '../components/Payment'
function Checkout() {
  return (
    <div>
        <Pagename name='CHECKOUT' />
        <div className="container-fluid pt-5">
            <div className="row px-xl-5">
                <BillingAddress/>
                <div className="col-lg-4">
                    <OrderTotal/>
                    <Payment/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout