import React, { useState } from "react";
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";
import "./style/header.css";
import  './style/sidebar.css'
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <Navbar toggle={toggle}></Navbar>
      <Sidebar  show={show} toggle={toggle}></Sidebar>
      <div className="content">
        <div className="contentItems">
          <h1 className="navHead">The Best Burgers In The City</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <div className="btn">View your cart</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
