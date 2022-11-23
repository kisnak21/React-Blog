import React from "react";
import Header from "../../header/Header";
import "./home.css";
import Posts from './../../posts/Posts';
import SideBar from "../../sidebar/SideBar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}
