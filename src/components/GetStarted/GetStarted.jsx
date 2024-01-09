import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Our News & Updates</span>
          <span className="secondaryText">
            Subscribe and Explore more of our Activities and Events.
            <br />
          </span>
          <button className="button" href>
            <a href="mailto:midin@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
