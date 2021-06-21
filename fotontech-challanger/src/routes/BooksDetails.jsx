import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';

class BooksDetails extends Component {
  constructor() {
    super();
    this.state = {
      bookDetail: {},
      loading: true,
    };
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchApi(id);
  }

  fetchApi(id) {
    const url = `https://www.googleapis.com/books/v1/volumes/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          bookDetail: data,
          loading: false,
        });
      });
  }

  render() {
    const { bookDetail, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        <img
          src={ bookDetail.volumeInfo.imageLinks.thumbnail }
          alt={ bookDetail.volumeInfo.title }
        />
        <p>{bookDetail.volumeInfo.title}</p>
        <p>{bookDetail.volumeInfo.authors}</p>
        <p>{bookDetail.volumeInfo.description}</p>
      </div>
    );
  }
}

BooksDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default BooksDetails;
