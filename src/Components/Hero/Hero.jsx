import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="main-frank-miller-div">
      <div className="main-blue-div">
        <div className="heading-div">
          <h1>
            👋 Hey, I am <br />
            Frank Miller
          </h1>
        </div>
        <div className="blue-marker-div">
          <img src="./Images/bluemarker.png" alt="" />
        </div>

        <div className="paragraph-div">
          <p>
            Empowering 100+ businesses in various industries such as <br /> Real
            Estate, Solar, Insurance, Healthcare, Merchant Services,
            <br /> and more with innovative technologies and strategies which
            <br /> help them achieve goals and build success in today's <br />{" "}
            competitive marketplace. <br />
          </p>
        </div>
        <div className="two-buttons">
          <button className="subscribe-hero">
            <img
              src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/subscribe_btn_img.da419ce63fde86da38046d878623b289.svg"
              alt="Subscribe Icon"
            />{" "}
            Subscribe
          </button>
          <button className="view-projects-hero">
            <img
              src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/ViewProjectEye.826151770d72bcbd0b718d015a0f67bb.svg"
              alt="Subscribe Icon"
            />{" "}
            <img
              src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/ViewProjects.8e96b582032a817a21fd7caae0826b57.svg"
              alt=""
            />
          </button>
        </div>
      </div>

      <div className="image-div">
        <img
          src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/FranksImg.7678985dc4004cf4bdc068c35a173d7d.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
