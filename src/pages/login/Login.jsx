/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useRef } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../context/Context';

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm" onSubmit={handlerSubmit}>
        <label>Username</label>
        <input type="text" className="loginInput" placeholder="Enter your username..." ref={userRef} />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter your password..." ref={passwordRef} />
        <button type="submit" className="loginButton" disabled={isFetching}>Login</button>
      </form>
      <button type="submit" className="loginRegisterButton">
        <Link className="link" to="/register">Register</Link>
      </button>
    </div>
  );
}
