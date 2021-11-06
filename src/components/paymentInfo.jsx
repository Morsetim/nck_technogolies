import React from 'react'

const PaymentInfo = ({
    subTotal,
    tax,
    code,
    promationAmount
}) => {
    return (
        <div className="main-payment">
            <div className="payment">
                <h2>Subtotal</h2>
                <h2>₦{subTotal}</h2>
            </div>
            <div className="payment">
                <h2>Estimated TAX</h2>
                <h2>₦{tax}</h2>
            </div>
            <div className="payment">
                <h2>Promotional Code: <span className="promo-code">{code}</span></h2>
                <h2>₦{promationAmount}</h2>
            </div>
        </div>
    )
}

export default PaymentInfo
