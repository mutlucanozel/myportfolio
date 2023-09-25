import React from 'react';
import kepce from "../assets/kepce.jpeg";
import { Link } from "react-router-dom";
import "./HeroImgStyles.css"; // Import your CSS file correctly

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={kepce} alt="IntroImg" />
      </div>
      <div className="content">
        <p>YAZILIM GELİŞTİRİCİ</p>
        <h1>Mutlu Can ÖZEL</h1>
        <div>
          <Link to="/project" className="btn">Portföy</Link>
          <Link to="/contact" className="btn btn-light">İLETİŞİM</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
