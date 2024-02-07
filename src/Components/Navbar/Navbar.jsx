import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main-navbar">
        <div className="logo">
          <img src="./Images/logoimage.png" alt="Logo" />
        </div>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Project</a>
        </div>
        <button className="subscribe-navbar">
          <img
            src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/subscribe_btn_img.da419ce63fde86da38046d878623b289.svg"
            alt="Subscribe Icon"
          />{" "}
          Subscribe
        </button>
        <button className="subscribe-navbar-mobile-view">
          <img
            src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/NavImg.a8baa61a3dc70fa0d78eacd8054db6e8.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
