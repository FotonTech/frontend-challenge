import React from 'react';
import HomeIcon from '../../imgs/home_icon.png';
import UserIcon from '../../imgs/user.png';
import LibIcon from '../../imgs/book.png';
import FooterSection from './styles/FooterDisplay';

export default function Footer() {
  return (
    <FooterSection>
      <div className="footer-section">
        <div clasName="icon">
          <img src={HomeIcon} alt="home icon" />
          <p>Home</p>
        </div>
        <div clasName="icon">
          <img src={LibIcon} alt="libraries icon" />
          <p>Libraries</p>
        </div>
        <div clasName="icon">
          <img src={UserIcon} alt="profile icon" />
          <p>Profile</p>
        </div>
      </div>
    </FooterSection>
  );
}
