import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductManage() {
  const[products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { fetchProducts(); }, []);
  const fetchProducts = () => 
    axios.get("http://localhost:8080/getAllProducts")
    .then(res => setProducts(res.data))
    .catch(err => console.log(err));

  const handleDelete = (id) => 
    axios.get('http://localhost:8080/deleteProduct', { params: { id }})
    .then(fetchProducts)
    .catch(err => {
      alert("Failed to delete product");
      console.error(err);
    });

  const handleUpdate = product => 
    navigate('/updateProduct', { state: { product} });

  return (
    <div className='container'>
        <h2>Product Management Page</h2>
        <div>
          <button className='btn btn-primary' onClick={() => navigate("/AddProduct")}>Add new product</button>
        </div>
        <br></br>

        <table className='product-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>
                  <img src={p.image} alt={p.name} width="100" height="100" />
                </td>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>{p.price}</td>
                <td>
                  <button className='btn btn-secondary' onClick={() => handleUpdate(p)}
                    >Update</button>
                  <br></br>
                  <br></br>
                  <button className='btn btn-danger' onClick={() => handleDelete(p.id)} 
                    >Delete</button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="6" style={{textAlign: "center"}}>No products available</td>
              </tr>
            )}
          </tbody>
        </table>
    </div>
  );
}
