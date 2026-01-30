import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import "./ProductManagement.css";

export default function AdminPage() {
  const navigate = useNavigate();
  return (
    <div className='admin-container'>
        <h2 className='admin-title'>Welcome to Admin Home</h2>
        <div className='admin-actions'>
          <button className='admin-btn' onClick={() => navigate('/ProductManage')}>Product Management</button>
        
          <button className='admin-btn' onClick={() => navigate('/UserManage')}>User Management</button>
        </div>
    </div>
  )
}

