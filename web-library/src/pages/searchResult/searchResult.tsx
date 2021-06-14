import BottomAppBar from "../../components/bottomAppBar/bottomAppBar"
import PageWrapper from "../../components/pageWrapper/pageWrapper"
import SearchBar from "../../components/searchBar/searchBar"
import Books from "./components/books"

const SearchResult = () => {
  return (
    <PageWrapper minHeight>
      <SearchBar />
      <Books />
      <BottomAppBar />
    </PageWrapper>
  )
}

export default SearchResult
