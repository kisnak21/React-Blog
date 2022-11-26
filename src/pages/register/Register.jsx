/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        username, email, password,
      });
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm" onSubmit={handlerSubmit}>
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Enter your name..." onChange={(e) => setUsername(e.target.value)} />
        <label>Email</label>
        <input type="email" className="registerInput" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="registerButton">Register</button>
      </form>
      <button type="submit" className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
      </button>
      {error && <span style={{ color: 'red', fontWeight: 'bold', marginTop: '10px' }}>Something went wrong!</span>}
    </div>
  );
}
