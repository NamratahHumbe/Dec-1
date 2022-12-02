import React from 'react'

function ApplyCoupon() {
  return (
    <div>
        <form className="mb-5" action="">
            <div className="input-group">
                <input type="text" className="form-control p-4" placeholder="Coupon Code"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary">Apply Coupon</button>
                    </div>
            </div>
        </form>
    </div>
  )
}

export default ApplyCoupon