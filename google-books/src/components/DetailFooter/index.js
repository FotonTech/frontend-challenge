import React from 'react';
import ReadIcon from '../../imgs/book-open.png';
import ListenIcon from '../../imgs/headphones.png';
import ShareIcon from '../../imgs/share.png';
import FooterDivisor from '../../imgs/footer-divisor.png';
import DetailFooterDisplay from './styles/DetailFooterDisplay';

export default function DetailFooter() {
  return (
    <DetailFooterDisplay>
      <div className="icon">
        <img src={ReadIcon} alt="home icon" />
        <p>Read</p>
      </div>
      <div className="icon">
        <img src={FooterDivisor} alt="footer divisor" />
      </div>
      <div className="icon">
        <img src={ListenIcon} alt="libraries icon" />
        <p>Listen</p>
      </div>
      <div className="icon">
        <img src={FooterDivisor} alt="footer divisor" />
      </div>
      <div className="icon">
        <img src={ShareIcon} alt="profile icon" />
        <p>Share</p>
      </div>
    </DetailFooterDisplay>
  );
}
