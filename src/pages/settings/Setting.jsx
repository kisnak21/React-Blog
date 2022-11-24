/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './setting.css';
import SideBar from '../../components/sidebar/SideBar';

export default function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle" />
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="User" />
          <label>Email</label>
          <input type="email" placeholder="user@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="********" />
          <button type="submit" className="settingsSubmit">Update</button>

        </form>
      </div>
      <SideBar />
    </div>

  );
}
