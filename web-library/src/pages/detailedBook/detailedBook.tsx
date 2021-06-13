import PageWrapper from "../../components/pageWrapper/pageWrapper"
import AppBar from "./components/appBar/appBar"
import BookDetails from "./components/bookDetails/bookDetails"
import BookThumbnail from "./components/bookThumbnail/bookThumbnail"
import GoBackButton from "./components/goBackButton/goBackButton"

const DetailedBook = () => {
  return (
    <PageWrapper maxHeight>
      <GoBackButton />
      <BookThumbnail />
      <BookDetails />
      <AppBar />
    </PageWrapper>
  )
}

export default DetailedBook
