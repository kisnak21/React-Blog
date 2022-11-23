/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './writepost.css';

export default function WritePost() {
  return (
    <div className="write">
      <img className="writeImg" src="https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus" />
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }} />
          <input type="text" placeholder="Title" className="writeInput" />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Tell your story..." type="text" className="writeInput writeText" />
        </div>
        <button type="submit" className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
