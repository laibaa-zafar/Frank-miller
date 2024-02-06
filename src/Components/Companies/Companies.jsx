import React from "react";
import "./Companies.css";

const Companies = () => {
  return (
    <>
      <div className="companies-div">
        <img
          src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/CompanyList.3b064f882104506c325895da992a66f1.svg"
          alt=""
        />
      </div>
      <div className="mobile-view-companies-div">
        <div className="mobile-view-companies-div-one">
          <img className="Ent"
            src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/ENT.6fa9695c5a15b56ec60f.png"
            alt=""
          />
          <img className="Ibt"
            src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/IBT.a2b2efb4773cd4599136.png"
            alt=""
          />
        </div>
        <div className="mobile-view-companies-div-two">
          <img className="Nyt"
            src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/NYT.0d22a1cdd739c4d5fba5.png"
            alt=""
          />
          <img className="RH"
            src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/RH.8acee0ff0724e022fa9e.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Companies;
