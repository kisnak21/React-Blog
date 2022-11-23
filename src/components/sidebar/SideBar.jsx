import React from 'react';
import './sidebar.css';

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt=""
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ipsum
          maiores soluta deserunt quas. Perspiciatis, voluptates ullam. Illum,
          velit iste.
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          <li className="sideBarListItem">Life</li>
          <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Programming</li>
          <li className="sideBarListItem">Cinema</li>
          <li className="sideBarListItem">Tech</li>
          <li className="sideBarListItem">Gaming</li>
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-square-instagram" />
          <i className="sideBarIcon fa-brands fa-square-twitter" />
          <i className="sideBarIcon fa-brands fa-square-pinterest" />
          <i className="sideBarIcon fa-brands fa-square-github" />
        </div>
      </div>
    </div>
  );
}
