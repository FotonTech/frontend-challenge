import React from 'react';
import Thumbnail from '../../imgs/home/video.png';
import ReviewSectionDisplay from './styles/ReviewSectionDisplay';

export default function ReviewSection() {
  return (
    <ReviewSectionDisplay>
      <div className="section-header">
        <h3>Reviews of The Days</h3>
        <h4>All Video</h4>
      </div>
      <img src={Thumbnail} alt="video thumbnail" />
    </ReviewSectionDisplay>
  );
}
