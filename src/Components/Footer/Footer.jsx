import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer-div">
      <div className="footer-wrapper">
        <div className="question-div">
          <h1>Want to follow my learnings?</h1>
        </div>
        <div className="form-div">
          <input type="text" placeholder="example@gmail.com" />
          <button>Submit</button>
        </div>
        <div className="all-copyrights-social">
          <div className="all-copyrights-reserved">
            @2024. Frank Miller. All Rights Reserved.
          </div>
          <div className="social-icons">
            <button>
              <img
                src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/Facebook.7b84dcd41af189d4185d339221227a8a.svg"
                alt="Facebook"
              />
            </button>
            <button>
              {" "}
              <img
                src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/LinkedIn.28ff65695184af478b867e6ef831af00.svg"
                alt="Twitter"
              />
            </button>
            <button>
              <img
                src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/Insta.ef1856b01ab1ae6b9f66aad212a992b6.svg"
                alt="Instagram"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
