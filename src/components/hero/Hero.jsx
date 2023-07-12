import React from "react";
import "./Hero.scss";
// import img1 from "../../assets/Rectangle-1";
// import img2 from "../../assets/Rectangle-2";
// import img3 from "../../assets/Rectangle-3";

const Hero = () => {
  return (
    <div className="hero-content">
      <div className="left-img flex-item">
        <p>Exclusive Offers</p>
        <h1>
          <span className="highlight">Specialist</span> in the grocery stores
        </h1>
        <p>Only this week don't miss</p>
        <div className="shop">
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </div>
      <div className="right-img">
        <div className="top-img flex-item">
          <p>Exclusive Offers</p>
          <h1>
            <span className="highlight">Specialist</span> in the grocery stores
          </h1>
        </div>
        <div className="bottom-img flex-item">
          <p>Exclusive Offers</p>
          <h1>
            <span className="highlight">Specialist</span> in the grocery stores
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
