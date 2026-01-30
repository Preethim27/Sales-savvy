import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post('http://localhost:8080/signIn', {username, password})
    .then(res => {
      localStorage.setItem('username', username);
      const role = res.data;
      if(role == 'admin') navigate('/adminPage');
      else if(role == 'customer') navigate('/customerPage');
      else alert('Unknown role: ' + role);
    })
    .catch(() => alert('Error signing in - check console'));
  };

  return (
    <div className='container'>
         <form onSubmit={handleSubmit}  className="form-container">
            <h2>Sign in: </h2>
            <div className='form-group'>
              <input type='text' value={username} placeholder='Username' onChange={e => setUsername(e.target.value)}/>
              <br></br><br></br>

              <input type='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)}/>
              <br></br><br></br>
              
              <button type='submit' className='btn btn-primary'>Sign In</button>
            </div>
        </form> 
    </div>
  )
}
