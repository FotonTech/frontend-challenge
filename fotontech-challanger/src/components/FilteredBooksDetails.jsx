import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class FilteredBooksDetails extends Component {
  getFilteredBooksElements(book) {
    return {
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors,
      image: book.volumeInfo.imageLinks.thumbnail,
      id: book.id,
    };
  }

  render() {
    const { filteredBooks } = this.props;
    const newArr = filteredBooks.map(this.getFilteredBooksElements);
    return (
      <div>
        {newArr.map((book, index) => (
          <Link to={ `/BooksDetails/${book.id}` } key={ `${book.title}` - `${index}` }>
            <button
              type="button"
              className="main-container"
            >
              <div>
                <p>{book.title}</p>
                <p>{book.author}</p>
              </div>
              <div>
                <img src={ book.image } alt={ book.title } />
              </div>
            </button>
          </Link>
        ))}

      </div>
    );
  }
}

FilteredBooksDetails.propTypes = {
  filteredBooks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
  })).isRequired };

export default FilteredBooksDetails;
