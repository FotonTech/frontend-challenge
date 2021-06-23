import React from 'react';
import PropTypes from 'prop-types';
import DetailContentDisplay from './styles/DetailContentDisplay';

export default function DetailContent({
  author, title, subtitle, description,
}) {
  const spacer = subtitle !== '' ? ' : ' : '';
  return (
    <DetailContentDisplay>
      <div className="header">
        <p className="title">
          <b>{title}</b>
          {spacer}
          {subtitle}
        </p>
        <p className="author">{author}</p>
      </div>
      <div className="content">
        <p>{description}</p>
      </div>
    </DetailContentDisplay>
  );
}

DetailContent.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
