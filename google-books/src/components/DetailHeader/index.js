import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReturnArrow from '../../imgs/detail/return_arrow.png';
import unavailableCover from '../../imgs/unavailable.png';
import DetailHeaderDisplay from './styles/DetailHeaderDisplay';
import BlueCircle from '../../imgs/detail/effects/blue_circle.png';
import TinyRed from '../../imgs/detail/effects/tiny_red_circle.png';
import OvalZebra from '../../imgs/detail/effects/Oval.png';
import SmallZebra from '../../imgs/detail/effects/small_oval.png';
import Transparent from '../../imgs/detail/effects/small_transparent_circle.png';

export default function DetailHeader({ thumbnail }) {
  const image = thumbnail === 'unavailable' ? unavailableCover : thumbnail;
  return (
    <DetailHeaderDisplay>
      <Link to="/" className="return-home">
        <button type="button">
          <img src={ReturnArrow} alt="return arrow" />
        </button>
      </Link>
      <img src={image} alt="Book Cover" className="book-cover" />
      <div className="background-div">
        <img src={TinyRed} alt="effects" style={{ position: 'absolute', top: '118px', left: '46px' }} />
        <img src={BlueCircle} alt="effects" style={{ position: 'absolute', top: '110px', left: '73px' }} />
        <img src={SmallZebra} alt="effects" style={{ position: 'absolute', top: '208px', left: '222px' }} />
        <img src={Transparent} alt="effects" style={{ position: 'absolute', top: '76px', left: '248px' }} />
        <img src={OvalZebra} alt="effects" style={{ position: 'absolute', top: '-34px', left: '297px' }} />
      </div>
    </DetailHeaderDisplay>
  );
}

DetailHeader.propTypes = {
  thumbnail: PropTypes.string.isRequired,
};
