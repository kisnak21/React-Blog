/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './login.css';

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label>Email</label>
        <input type="email" className="loginInput" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter your password..." />
        <button type="submit" className="loginButton">Login</button>
      </form>
      <button type="submit" className="loginRegisterButton">Register</button>
    </div>
  );
}
