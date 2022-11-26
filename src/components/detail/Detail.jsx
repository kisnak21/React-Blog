/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './detail.css';
import { Context } from '../../context/Context';

export default function Detail() {
  const location = useLocation();
  const path = (location.pathname.split('/')[2]);
  const [post, setPost] = useState({});
  const PF = 'http://localhost:5000/images/';
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`http://localhost:5000/api/posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handlerDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${path}`, { data: { username: user.username } });
      window.location.replace('/');
    } catch (error) { }
  };

  const handlerUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/posts/${path}`, { username: user.username, title, desc });
      setUpdateMode(false);
    } catch (error) { }
  };
  return (
    <div className="detailpost">
      <div className="detailpostWrapper">
        {post.photo && (
        <img src={PF + post.photo} alt="" className="detailpostImg" />
        )}
        {updateMode ? <input type="text" value={title} className="detailpostTitleInput" autoFocus onChange={(e) => setTitle(e.target.value)} /> : (

          <h1 className="detailpostTitle">
            {title}
            {post.username === user?.username && (
            <div className="detailpostEdit">
              <i className="detailpostIcon fa-solid fa-pen-to-square" onClick={() => setUpdateMode(true)} />
              <i className="detailpostIcon fa-solid fa-trash" onClick={handlerDelete} />
            </div>
            )}
          </h1>
        )}
        <div className="detailpostInfo">
          <span className="detailpostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="detailpostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? <textarea className="detailpostDescInput" value={desc} onChange={(e) => setDesc(e.target.value)} /> : (
          <p className="detailpostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="detailPostButton" type="submit" onClick={handlerUpdate}>Update</button>
        )}
      </div>
    </div>
  );
}
