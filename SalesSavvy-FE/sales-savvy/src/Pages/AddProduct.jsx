import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./ProductManagement.css";

export default function AddProduct() {
    const[name, setName] = useState('');
    const[description, setDescription] = useState('');
    const[price, setPrice] = useState('');
    const[image, setImage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:8080/addProduct', {name, description, price: parseInt(price, 10), image})
        .then(() => { alert("Product added"); navigate('/ProductManage'); })
        .catch((error) => {
            console.error(error);
            alert("Error adding product");
    });
    }

  return (
    <div className='container'>
        <h2>Add new product here</h2>
        <form className='form-container' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Product name: </label>
                <input type='text' value={name} onChange={e => setName(e.target.value)} required/>
                <br></br>
                <label>Description: </label>
                <input type='text' value={description} onChange={e => setDescription(e.target.value)} required/>  
                <br></br>
                <label>Price: </label>
                <input type='number' value={price} onChange={e => setPrice(e.target.value)} required/>
                <br></br>
                <label>Image URL: </label>
                <input type='text' value={image} onChange={e => setImage(e.target.value)} required/>
                <br></br>
            <button className='btn btn-primary' type='submit'>Add Product</button>
            </div>
        </form>
    </div>
  );
}
