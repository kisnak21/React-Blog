/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './register.css';

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Enter your name..." />
        <label>Email</label>
        <input type="email" className="registerInput" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter your password..." />
        <button type="submit" className="registerButton">Register</button>
      </form>
      <button type="submit" className="registerLoginButton">Login</button>
    </div>
  );
}
