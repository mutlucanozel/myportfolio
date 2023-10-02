import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroImgStyles.css';

const HeroImg = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Resmin URL'sini burada ayarlayın
    const imageLink = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80';
    setImageUrl(imageLink);
  }, []);

  return (
    <div className="hero">
      <div className="mask">
        {imageUrl && <img className="into-img" src={imageUrl} alt="IntroImg" />}
      </div>
      <div className="content">
        <p>YAZILIM GELİŞTİRİCİ</p>
        <h1>Mutlu Can ÖZEL</h1>
        <div>
          <Link to="/project" className="btn">
            Portföy
          </Link>
          <Link to="/contact" className="btn btn-light">
            İLETİŞİM
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
