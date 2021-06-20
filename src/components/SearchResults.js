import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

import NoImage from '../images/NoImage.jpg';
import "./SearchResults.css"

export const SearchResults = (props) => {
  const history = useHistory();
  const { query } = props;
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [bookList, setBookList] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const startIndex = page * 9;

  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=relevance&startIndex=${startIndex}&maxResults=9`;


  const fetchBooks = async () => {
    setLoading(true);
    const response = await fetch(`${url}`);
    const books = await response.json();
    const booksItems = books.items;
    setLoading(false);
    return booksItems;
  }

  useEffect((query) => {
    if (query && query.length > 2) {
      fetchBooks()
      .then(booksItems => {
        if(booksItems) {
          console.log('ate aqui');
          setNoResult(false);
          setBookList([booksItems]);
        } else {
          setNoResult(true);
        }
      });
    } else {
      setBookList([])
    }
  }, [query]);

  useEffect(() => {
    if (query) {
      fetchBooks()
      .then(booksItems => {
        setBookList([...bookList, booksItems]);
      })
    }
  }, [page]);

  return (
    <div className="ResultsWrapper">
      {bookList.length > 0 && (
        <div>
          {/* bookList é um array de arrays. o primeiro array refere-se a cada página. o segundo array 
          refere-se aos livros que cada página possui. */}
          {bookList.map((pagina, index) => {
            return (
              <Grid container spacing={2} key={`Página #${index ++}`} >
                {pagina.map(livro => {
                  return (
                    <Grid item xs={4} key={livro.id} className="BookInfo"
                    onClick={() => {
                      history.push({
                        pathname: '/details',
                        livro,
                        query
                      })
                    }}>
                      <Paper 
                      style={{
                        height: '150px',
                        backgroundImage: livro.volumeInfo.imageLinks?.thumbnail ? `url(${livro.volumeInfo.imageLinks?.thumbnail})` : `url(${NoImage})`,
                        backgroundPosition: 'center', 
                        backgroundSize: 'cover', 
                        backgroundRepeat: 'no-repeat',
                        }} />
                      <div className="BookInfo">
                        <p className="BookTitle">{livro.volumeInfo.title}</p>
                        <p className="BookAuthor">by {livro.volumeInfo.authors ? livro.volumeInfo.authors[0] : "Unknown"}</p>
                      </div>
                        {/* <img src={livro.volumeInfo.imageLinks?.thumbnail} alt="" style={{width: "100%", height: "100%"}}/> */}

                    </Grid>
                  )
                })}
              </Grid>
            )
          })}
        </div>
      )}

      {loading && (
        <div className="Loading">
          <CircularProgress style={{color: "#36383A"}} />
        </div>
      )}

      {bookList.length > 0 && !loading && (
        <div className="Loading" >
          <Button 
          variant="contained"
          style={{backgroundColor: "#fce8c3", color: "#36383A"}}
          onClick={() => {
            const cont = page + 1;
            setPage(cont);
          }}>
          Load more
          </Button>
        </div>
      )}

      {noResult && (
        <div className="NoResult">
          <h1>Sem resultados! </h1>
        </div>
      )}

      

    </div>
  )
}