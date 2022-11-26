import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './detail.css';

export default function Detail() {
  const location = useLocation();
  const path = (location.pathname.split('/')[2]);
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`http://localhost:5000/api/posts/${path}`);
      setPost(res.data);
    };
    getPost();
  }, [path]);
  return (
    <div className="detailpost">
      <div className="detailpostWrapper">
        {post.photo && (
        <img src={post.photo} alt="" className="detailpostImg" />
        )}
        <h1 className="detailpostTitle">
          {post.title}
          <div className="detailpostEdit">
            <i className="detailpostIcon fa-solid fa-pen-to-square" />
            <i className="detailpostIcon fa-solid fa-trash" />
          </div>
        </h1>
        <div className="detailpostInfo">
          <span className="detailpostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="detailpostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="detailpostDesc">{post.desc}</p>
      </div>
    </div>
  );
}
