import React from 'react';
import Thumbnail from '../../imgs/home/video1.png';
import ReviewSectionDisplay from './styles/ReviewSectionDisplay';

export default function ReviewSection() {
  return (
    <ReviewSectionDisplay>
      <div className="section-header">
        <h3>Reviews of The Days</h3>
        <h4>All Video</h4>
      </div>
      <div>
        <img src={Thumbnail} alt="video thumbnail" />
        <div className="thumbnail-info">
          <p className="video-title">Dont Make Me Think - Steve Krug</p>
          <span>
            <p>Jesse Showalter</p>
            <p>5.2k views</p>
            <p>1 Week ago</p>
          </span>
          <p className="description">
            Dont Make Me Think
            by Steve Krug is one of the first books i read when i was getting into digital design.
            It helped me move from designing things that just look nice to design things that are
          </p>
        </div>
      </div>
    </ReviewSectionDisplay>
  );
}
