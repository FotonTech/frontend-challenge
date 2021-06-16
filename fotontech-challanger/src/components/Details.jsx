import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
  render() {
    const { books: { title, author, image } } = this.props;
    return (
      <div>
        <p>{title}</p>
        <p>{author}</p>
        <img src={ image } alt={ title } />
      </div>
    );
  }
}

Details.propTypes = {
  books: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Details;
