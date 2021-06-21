import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../cssComponents/Details.css';
import { Link } from 'react-router-dom';

class Details extends Component {
  render() {
    const { books: { title, author, image, id } } = this.props;
    return (
      <Link to={ `/BooksDetails/${id}` }>
        <button
          type="button"
          className="main-container"
        >
          <div>
            <p>{title}</p>
            <p>{author}</p>
          </div>
          <div>
            <img src={ image } alt={ title } />
          </div>
        </button>

      </Link>
    );
  }
}

Details.propTypes = {
  books: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Details;
