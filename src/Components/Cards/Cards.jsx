import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards-main-div">
      <div className="luly">
        <div className="luly-image">
          <img
            src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/LulyImg.38908d85b5505fe59112322393348bfc.svg"
            alt=""
          />
        </div>
        <div className="luly-paragraph">
          <p>
            Generative Al-powered voice bot that <br /> is capable of handling
            full
            <br />
            conversations over phone calls and <br /> can autonomously execute
            tasks
            <br />
            across thousands of applications.
          </p>
        </div>
        <div className="luly-learn-more">
          <h5>Learn More </h5>
          <img
            src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/BlueArrow.77eb664a9ed807f5be581a3cae1d0c37.svg"
            alt=""
          />
        </div>
      </div>
      {/* paretoprocess */}
      <div className="paretoprocess">
        <div className="paretoprocess-image">
          <img
            src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/ParetoImg.3ae340517c42215bb537261e3a60fdd5.svg"
            alt=""
          />
        </div>
        <div className="paretoprocess-paragraph">
          <p>
            Consulting agency that develops
            <br /> enterprise sales solutions and
            <br /> software products.
          </p>
        </div>
        <div className="paretoprocess-learn-more">
          <h5>Learn More </h5>
          <img
            src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/BlueArrow.77eb664a9ed807f5be581a3cae1d0c37.svg"
            alt=""
          />
        </div>
      </div>
      {/* simplify-rei */}
      <div className="simplify-rei">
        <div className="simplify-rei-image">
          <img
            src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/SimplifyImg.75a8d758763e9be765053fdb559c6898.svg"
            alt=""
          />
        </div>
        <div className="simplify-rei-paragraph">
          <p>
            Lead conversion system that helps <br /> real estate investors
            convert more
            <br /> leads into deals.
          </p>
        </div>
        <div className="simplify-rei-learn-more">
          <h5>Learn More </h5>
          <img
            src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/BlueArrow.77eb664a9ed807f5be581a3cae1d0c37.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
