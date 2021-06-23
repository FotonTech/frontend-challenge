import React from 'react';
import PropTypes from 'prop-types';
import DetailContentDisplay from './styles/DetailContentDisplay';

export default function DetailContent({
  author, title, subtitle, description,
}) {
  const parseHTML = (html) => {
    const text = html.replaceAll('<p>', '').replaceAll('</p>', '').replaceAll('<b>', '').replaceAll('</b>', '')
      .replaceAll('<i>', '')
      .replaceAll('</i>', '')
      .replaceAll('<\br>', '')
      .replaceAll('•', '\n')
      .replaceAll('<br>', '\n');
    const textArray = text.split('\n').filter((line) => line !== '');
    return textArray;
  };

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
        {parseHTML(description).map((line) => <p>{line}</p>)}
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
