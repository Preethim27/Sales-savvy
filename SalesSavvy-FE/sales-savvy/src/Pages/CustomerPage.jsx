import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CustomerPage.css';

export default function CustomerPage() {
  const [username, setUsername] = useState('');
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username') || '';
    setUsername(storedUsername);

    axios
      .get('http://localhost:8080/getAllProducts')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const increase = (prodId) => {
    setQuantity(prev => ({
      ...prev,
      [prodId]: (prev[prodId] || 1) + 1
    }));
  };

  const decrease = (prodId) => {
    setQuantity(prev => ({
      ...prev,
      [prodId]: (prev[prodId] || 1) - 1
    }));
  };

  const handleCart = (product) => {
    const payload = {
      username,
      productId: product.id,
      quantity: quantity[product.id] || 1
    };

    axios
      .post('http://localhost:8080/addToCart', payload)
      .then(() => alert("Added to cart"))
      .catch(err => console.error(err));
  };

  return (
    <div className='customer-page'>
      <h2>Welcome {username}</h2>

      <button
        className="btn btn-secondary"
        onClick={() => navigate('/viewCart')}
      >
        View Cart
      </button>

      <div className="product-row">
        {products.map(p => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.name} />

            <h4>{p.name}</h4>
            <p>{p.description}</p>
            <h5>₹{p.price}</h5>

            <div className="qty-controls">
              <button
                onClick={() => decrease(p.id)}
                disabled={(quantity[p.id] || 1) === 1}
              >
                -
              </button>

              <span>{quantity[p.id] || 1}</span>

              <button onClick={() => increase(p.id)}>+</button>
            </div>

            <button
              className="btn btn-secondary"
              onClick={() => handleCart(p)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
