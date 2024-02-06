import React from "react";
import "./MeetFrank.css";
const MeetFrank = () => {
  return (
    <div className="meet-frank-main">
      <div className="meet-frank-image">
        <img
          src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/MeetFrank.d3dd10e4fc4761961fe8e1a09f9183f7.svg"
          alt=""
        />
      </div>
      <div className="meet-frank-content">
        <div className="meet-frank-heading">
          <h1> Meet Frank</h1>
        </div>
        <div className="meet-frank-paragraph">
          <p>
            {" "}
            The computer became a safe haven for me very early on in <br />
            life, and at just 11 years old I started my first business in the
            <br /> consumer technology space.
          </p>
          <p>
            "Any sufficiently advanced technology is indistinguishable
            <br /> from magic."
          </p>
          <p>
            In the past four years, I have worked with hundreds of online <br />{" "}
            business owners and real estate investors to convert more
            <br /> leads into deals by building sales solutions and software{" "}
            <br />
            that optimize client acquisition.
          </p>
          <p>
            Now, I am expanding our services and building a portfolio of
            <br /> public and private applications that service several
            <br /> industries such as Real Estate, Solar, Healthcare, and more.
          </p>
        </div>
        <div className="end-button">
          <button className="view-projects">
            <img
              src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/ViewProjectEye.826151770d72bcbd0b718d015a0f67bb.svg"
              alt="View projects"
            />
            <img
              src="http://luly-portfolio.s3-website-eu-west-1.amazonaws.com/static/media/ViewProjects.8e96b582032a817a21fd7caae0826b57.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetFrank;
