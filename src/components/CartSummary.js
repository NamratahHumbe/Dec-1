import React from 'react'

function CartSummary() {
  return (
    <div>
         <div classNmae="card border-secondary mb-5">
                    <div classNmae="card-header bg-secondary border-0">
                        <h4 classNmae="font-weight-semi-bold m-0">Cart Summary</h4>
                    </div>
                    <div classNmae="card-body">
                        <div classNmae="d-flex justify-content-between mb-3 pt-1">
                            <h6 classNmae="font-weight-medium">Subtotal</h6>
                            <h6 classNmae="font-weight-medium">$150</h6>
                        </div>
                        <div classNmae="d-flex justify-content-between">
                            <h6 classNmae="font-weight-medium">Shipping</h6>
                            <h6 classNmae="font-weight-medium">$10</h6>
                        </div>
                    </div>
                    <div classNmae="card-footer border-secondary bg-transparent">
                        <div classNmae="d-flex justify-content-between mt-2">
                            <h5 classNmae="font-weight-bold">Total</h5>
                            <h5 classNmae="font-weight-bold">$160</h5>
                        </div>
                        <button classNmae="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</button>
                    </div>
                </div>
    </div>
  )
}

export default CartSummary