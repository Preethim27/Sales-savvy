import { useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from 'axios' 

export default function SignUpPage() {
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[dob, setDob] = useState('');
    const[gender, setGender] = useState('');
    const[role, setRole] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:8080/signUp', { username, email, password, dob, gender, role})
        .then(res => {
            alert('Signed up: ' + res.data);
            navigate('/SignInPage');
        })
        .catch(() => alert("Error signing up: check console!!"));
    };

  return (
    <div className="container">
        <form onSubmit={handleSubmit} autoComplete="off" className="form-container">
            <h2>Sign up below:</h2>
            <div className="form-group">
                <label>Username: </label>
                <input type='text' value={username} 
                    placeholder='Username'
                    onChange={e => setUsername(e.target.value)} required/>
                <br></br>
                <br></br>

                <label>Email: </label>
                <input type='email' value={email} 
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)} required/>
                <br></br><br></br>

                <label>Password: </label>
                <input type='password' value={password}
                    placeholder='Password'
                    onChange={e => setPassword(e.target.value)} required/>
                <br></br><br></br>

                <label>Date of Birth: </label>
                <input type='date' value={dob} 
                    onChange={e => setDob(e.target.value)} required/>
                <br></br><br></br>  

                <label>Gender: </label>
                <select value={gender} onChange={e => setGender(e.target.value)} required>
                    <option value="">Select gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
                <br></br><br></br>

                <label>Role: </label>
                <select value={role} onChange={e => setRole(e.target.value)} required>
                    <option value="">Select role</option>
                    <option value='admin'>Admin</option>
                    <option value='customer'>Customer</option>
                </select>
                <br></br><br></br>
                <button type='submit' className='btn btn-primary'>Sign Up</button>
            </div>
        </form>
    </div>
  )
}
