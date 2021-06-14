import { useEffect } from 'react'
import { useState } from 'react'
import BottomAppBar from '../../components/bottomAppBar/bottomAppBar'
import PageWrapper from '../../components/pageWrapper/pageWrapper'
import SearchBar from '../../components/searchBar/searchBar'
import { Book, Books } from '../../models/books'
import { getBooksBySearch } from '../../utils/getBooksBySearch'
import BookReviews from './components/bookReviews/bookReviews'
import BooksDiscovery from './components/booksDiscovery/booksDiscovery'
import GreetingUserMessage from './components/greetingUserMessage/greetingUserMessage'
import ReadingSummary from './components/readingSummary/readingSummary'

const Home = () => {
  const [booksDiscovery, setBooksDiscovery] = useState<Books>()
  const [readingSummaryBook, setReadingSummaryBook] = useState<Book>()

  useEffect(() => {
    getBooksBySearch('Hooked', 1).then((result) => {
      setBooksDiscovery(result)
    })
    getBooksBySearch('Good to great', 1).then((result) => {
      setReadingSummaryBook(result.items[0])
    })
  }, [])

  return (
    <PageWrapper>
      <SearchBar />
      <GreetingUserMessage />
      <BooksDiscovery books={booksDiscovery} />
      <ReadingSummary book={readingSummaryBook} />
      <BookReviews />
      <BottomAppBar />
    </PageWrapper>
  )
}

export default Home
