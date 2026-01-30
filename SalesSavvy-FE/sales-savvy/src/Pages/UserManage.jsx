import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function UserManage() {
  const[users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/getAllUsers")
    .then(res => setUsers(res.data))
    .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/deleteUser/${id}`)
    .then(() => {
      alert("User deleted successfully");
      setUsers(users.filter(u => u.id !== id));
    })
    .catch(err => {
      console.error(err);
      alert("Deleting user failed");
    })
  }

  return (
    <div className='container'>
        <h2>User Management</h2>
        <br></br>
        <div>
          <table className='product-table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>{u.dob}</td>
                  <td>{u.gender}</td>
                  <td>{u.role}</td>
                  <td><button className='btn btn-danger' onClick={() => handleDelete(u.id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}
