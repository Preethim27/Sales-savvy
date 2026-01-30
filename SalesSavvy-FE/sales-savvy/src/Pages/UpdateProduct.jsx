import axios from 'axios';
import { useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';


export default function UpdateProduct() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const prod = state?.product || {};

    const[name, setName] = useState(prod.name || '');
    const[description, setDescription] = useState(prod.description || '');
    const[price, setPrice] = useState(prod.price || '');
    const[image, setImage] = useState(prod.image || '');

    // useEffect(() => {
    //     axios.get(`http://localhost:8080/product/${id}`)
    //     .then(res => {
    //         setName(res.data.name);
    //         setDescription(res.data.description);
    //         setPrice(res.data.price.toString());
    //         setImage(res.data.image);
    //     })
    //     .catch(err => {
    //         console.error("Error fetching product: " , err);
    //     });
    // }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8080/updateProduct", { id: prod.id, name, description, price: parseInt(price, 10), image})
        .then(() => { alert("Product updated"); navigate('/ProductManage'); })
        .catch(() => alert("Error updating product"));
    };


  return (
    <div>
        <h2>Update product here</h2>
       <form onSubmit={handleSubmit} className='form-container'>
            <div className='form-group'>
                <label>Product name: </label>
                <input type='text' value={name} onChange={e => setName(e.target.value)} required/>
            
                <label>Description: </label>
                <input type='text' value={description} onChange={e => setDescription(e.target.value)} required/>
              
                <label>Price: </label>
                <input type='number' value={price} onChange={e => setPrice(e.target.value)} required/>
            
                <label>Image URL: </label>
                <input type='text' value={image} onChange={e => setImage(e.target.value)} required/>
            </div>
            <br></br>
            <button type='submit' className='btn btn-primary'>Update Product</button>
        </form>
    </div>
  )
}
