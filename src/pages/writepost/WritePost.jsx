/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import './writepost.css';
import axios from 'axios';
import { Context } from '../../context/Context';

export default function WritePost() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await axios.post('http://localhost:5000/api/upload', data);
      } catch (err) {}
    }
    try {
      const res = await axios.post('http://localhost:5000/api/posts', newPost);
      window.location.replace(`/post/${res.data._id}`);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
      <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}

      <form className="writeForm" onSubmit={handlerSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus" />
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
          <input type="text" placeholder="Title" className="writeInput" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Tell your story..." type="text" className="writeInput writeText" onChange={(e) => setDesc(e.target.value)} />
        </div>
        <button type="submit" className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
