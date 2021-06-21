import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import Details from '../components/Details';
import FilteredBooksDetails from '../components/FilteredBooksDetails';
import Input from '../components/Input';
import '../cssComponents/Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      bookApi: [],
      searchBook: [],
      filteredTitle: '',
      isSearchRender: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=.';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          bookApi: data.items,
          loading: false,
        });
      });
  }

  handleChange({ target: { value } }) {
    const filteredBooks = this.filterBooks(value);
    this.setState({
      searchBook: filteredBooks,
      filteredTitle: value,
    });
  }

  handleFocus() {
    this.setState({
      isSearchRender: true,
    });
  }

  getBooksElements(book) {
    return {
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors,
      image: book.volumeInfo.imageLinks.thumbnail,
      id: book.id,
    };
  }

  filterBooks(inputvalue) {
    const { bookApi } = this.state;
    const filteredBook = bookApi.filter((book) => (
      book.volumeInfo.title.toLowerCase().includes(inputvalue.toLowerCase())
    ));
    return filteredBook;
  }

  render() {
    const { bookApi, loading, searchBook, filteredTitle, isSearchRender } = this.state;
    const { history } = this.props;
    if (loading) return <Loading />;
    return (
      <>
        <Input
          type="text"
          placeholder="Search book"
          name="searchBook"
          onChange={ this.handleChange }
          onFocus={ this.handleFocus }
          value={ filteredTitle }
        />
        { isSearchRender ? <FilteredBooksDetails filteredBooks={ searchBook } />
          : (
            <div>
              <h2>Hi, Mehmed Al Fatih</h2>
              <h3>Discover new book</h3>
              <ul className="home-container">
                {
                  bookApi.map((book, index) => (
                    <li key={ index }>
                      <Details key={ index } books={ this.getBooksElements(book) } />
                    </li>
                  ))
                }
              </ul>
              <h3>Currently Reading</h3>
              <button
                onClick={ () => {
                  history.push({ pathname: `/BooksDetails/${bookApi[1].id}` });
                } }
                type="button"
              >
                <img
                  src={ bookApi[1]?.volumeInfo?.imageLinks?.thumbnail }
                  alt={ bookApi[1]?.volumeInfo?.title }
                />
                <p>{bookApi[1]?.volumeInfo?.title}</p>
                <p>
                  {
                    (bookApi[1]?.volumeInfo?.authors)
                      ? bookApi[1]?.volumeInfo?.authors[0] : ''
                  }
                </p>
              </button>
            </div>
          )}

      </>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
