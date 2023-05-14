import React, { useState } from 'react';
import axios from 'axios';
import "../styles/loginCredential.css";



function LoginCredential() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      password: password
    };
    axios.post('/login', data)
      .then(response => {
        // handle successful login
      })
      .catch(error => {
        // handle login error
      });
  }
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginCredential;
