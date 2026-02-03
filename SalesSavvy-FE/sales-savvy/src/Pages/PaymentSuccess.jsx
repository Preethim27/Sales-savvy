import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function PaymentSuccess() {
    const navigate = useNavigate();
    const location = useLocation();
    const { paymentId, orderId } = location.state || {};

  return (
    <div className='container'>
        <h2 className='admin-title'><b>Payment successful</b></h2>

        <div className='form-container'>
            <h3>Thank you for shopping with Sales savvy</h3>
            <p className='description'>Your payment has been completed successfully.</p>

            {paymentId && (
                <p><b>Payment ID:</b> {paymentId}</p>
            )}

            {orderId && (
                <p><b>Order ID:</b>{orderId}</p>
            )}

            <div style={{marginTop: "20px"}}>
                <button className="btn btn-primary" onClick={() => navigate('/customerPage')}>
                    Continue Shopping
                </button>
                <button className='btn btn-secondary' onClick={() => navigate("/viewCart")}>
                    View Cart
                </button>
            </div>
        </div>
    </div>
  );
}
