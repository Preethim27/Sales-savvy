import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className='container' >
        <h3 className='title'>Welcome to SalesSavvy shopping website!!!!</h3>
        <p className='description'>Discover top deals, hand-picked products, and a seamless shopping journey built just for you.  
        Start saving time and money today!</p>
        <button className='btn btn-primary' onClick={() => navigate('/SignInPage')}>SIGN IN</button>
        <br></br>
        <button className='btn btn-primary' onClick={() => navigate('/SignUpPage')}>SIGN UP</button>
         </div>
  )
}
