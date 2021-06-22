import React from 'react';
import HomeIcon from '../../imgs/home/home_icon.png';
import UserIcon from '../../imgs/home/user.png';
import LibIcon from '../../imgs/home/book.png';
import FooterSection from './styles/FooterDisplay';

export default function Footer() {
  return (
    <FooterSection>
      <div className="footer-section">
        <div className="icon">
          <img src={HomeIcon} alt="home icon" />
          <p className="selected">Home</p>
        </div>
        <div className="icon">
          <img src={LibIcon} alt="libraries icon" />
          <p>Libraries</p>
        </div>
        <div className="icon">
          <img src={UserIcon} alt="profile icon" />
          <p>Profile</p>
        </div>
      </div>
    </FooterSection>
  );
}
