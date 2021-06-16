import React, { Component } from 'react';
import Loading from '../components/Loading';
import Details from '../components/Details';
import Input from '../components/Input';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      bookApi: [],
    };
  }

  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=.';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.items);
        this.setState({
          bookApi: data.items,
          loading: false,
        });
      });
  }

  getBooksElements(book) {
    return {
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors,
      image: book.volumeInfo.imageLinks.thumbnail,
    };
  }

  render() {
    const { bookApi, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        <Input type="text" />
        <div>
          {
            bookApi.map((book, index) => (
              <Details key={ index } books={ this.getBooksElements(book) } />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Home;
