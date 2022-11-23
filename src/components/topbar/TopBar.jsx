import React from 'react';
import './topbar.css';

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-instagram" />
        <i className="topIcon fa-brands fa-square-twitter" />
        <i className="topIcon fa-brands fa-square-pinterest" />
        <i className="topIcon fa-brands fa-square-github" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass" />
      </div>
    </div>
  );
}
