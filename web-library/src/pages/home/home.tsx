import BottomAppBar from '../../components/bottomAppBar/bottomAppBar'
import PageWrapper from '../../components/pageWrapper/pageWrapper'
import SearchBar from '../../components/searchBar/searchBar'
import BookReviews from './components/bookReviews/bookReviews'
import BooksDiscovery from './components/booksDiscovery/booksDiscovery'
import GreetingUserMessage from './components/greetingUserMessage/greetingUserMessage'
import ReadingSummary from './components/readingSummary/readingSummary'

const Home = () => {
  return (
    <PageWrapper>
      <SearchBar />
      <GreetingUserMessage />
      <BooksDiscovery />
      <ReadingSummary />
      <BookReviews />
      <BottomAppBar />
    </PageWrapper>
  )
}

export default Home
