import React from 'react';
import { FaPhone, FaInstagram, FaMailBulk, FaLinkedin } from 'react-icons/fa';
import githublogo from '../assets/GitHub-Logo.png';
import './FooterStyles.css';

const Footer = () => {
  const phoneNumber = '0545 660 2626';
  const emailAddress = 'mutlu-26@hotmail.com';

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleEmptySpaceClick = (e) => {
    e.stopPropagation(); // Boşluğa tıklandığında diğer işlemleri engellemek için
  };

  return (
    <div className="footer" onClick={handleEmptySpaceClick}>
      <div className="footer-container">
        <div className="left">
          <h4>İletişim</h4>
          <p>
            Kariyerim ya da projelerim hakkında herhangi bir soru, görüş veya öneriniz varsa benimle
            iletişim kurmaktan kaçınmayın. İşte bana ulaşabileceğiniz iletişim kanalları:{' '}
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/mutlucanozel" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={50} style={{ color: '#fff', marginRight: '1rem' }} />
            </a>
            <a href="https://instagram.com/mutlucanozel?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={50} style={{ color: '#fff', marginRight: '1rem' }} />
            </a>
            
          </div>
        </div>
        <div className="right">
          <br></br>
          <br></br>
          <div className="phone">
            <h4 onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
              <FaPhone size={20} style={{ color: '#fff', marginRight: '1rem' }} />
              {phoneNumber}
            </h4>
          </div>
          <div className="email">
            <h4 onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
              <FaMailBulk size={20} style={{ color: '#fff', marginRight: '1rem' }} />
              {emailAddress}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
