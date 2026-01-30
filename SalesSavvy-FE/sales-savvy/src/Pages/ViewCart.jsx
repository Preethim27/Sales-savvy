import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ViewCart.css';

export default function ViewCart() {

  const [username] = useState(localStorage.getItem('username'));
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCart();
  }, [username]);

  const fetchCart = () => {
    axios.get('http://localhost:8080/viewCart', { params: { username } })
      .then(res => setItems(res.data))
      .catch(console.error);
  };

  const updateQuantity = (item, newQty) => {
    if (newQty < 1) return;

    axios.patch('http://localhost:8080/updateCartItem', {
      username,
      productId: item.productId,
      quantity: newQty
    })
      .then(fetchCart)
      .catch(console.error);
  };

  const removeFromCart = (productId) => {

  if (!window.confirm("Remove item from cart?")) return;

  axios.delete('http://localhost:8080/removeCartItem', {
    data: { username, productId }
  })
  .then(fetchCart)
  .catch(console.error);
  };

  const totalAmount = items.reduce((total, item) =>
    total + item.price * item.quantity, 0
  );

  const handlePayment = () => {

  const options = {
    key: "rzp_test_S9mLIVtgioWnXQ",
    amount: 500, // amount in paise (500 = ₹5)
    currency: "INR",
    name: "Sales Savvy",
    description: "Order Payment",

    handler: function (response) {
      alert("Payment Successful");
      console.log(response);
    },

    theme: {
      color: "#3399cc"
    }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };


  return (
    <div className="view-cart-page">

      <h2 className="cart-title">{username}'s Cart</h2>
      
      <div className="cart-container">

        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.map(it => (
              <tr key={it.productId}>

                <td>
                  <img
                    src={it.image}
                    alt={it.name}
                    className="cart-image"
                  />
                </td>

                <td className="cart-name">{it.name}</td>

                <td className="cart-price">₹{it.price}</td>

                <td>
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(it, it.quantity - 1)}
                  >
                    -
                  </button>

                  {it.quantity}

                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(it, it.quantity + 1)}
                  >
                    +
                  </button>
                </td>

                <td className="cart-subtotal">
                  ₹{it.price * it.quantity}
                </td>

                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => updateQuantity(it, 1)}
                  >
                    Reset
                  </button>

                  <button
                    className="btn btn-primary"
                    onClick={() => removeFromCart(it.productId)}
                  >
                    Remove
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

        {/* TOTAL BOX */}
        <div className="cart-total-box">

          <h3>
            <span>Total</span>
            <span>₹{totalAmount}</span>
          </h3>

          <button onClick={handlePayment} className="checkout-btn">
            Proceed to Checkout
          </button>

        </div>

      </div>
    </div>
  );
}
