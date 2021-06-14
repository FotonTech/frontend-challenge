import { useState } from "react"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import PageWrapper from "../../components/pageWrapper/pageWrapper"
import { Book } from "../../models/books"
import { getDetailedBookInformation } from "../../utils/getDetailedBookInformation"
import AppBar from "./components/appBar/appBar"
import BookDetails from "./components/bookDetails/bookDetails"
import BookThumbnail from "./components/bookThumbnail/bookThumbnail"
import GoBackButton from "./components/goBackButton/goBackButton"

const DetailedBook = () => {
  const history = useHistory()
  const [book, setBook] = useState<Book | undefined>()

  useEffect(() => {
    const url = history.location.pathname
    const bookId = url.split(':')[1]

    getDetailedBookInformation(bookId).then(result => {
      setBook(result)
    }).catch(() => { setBook(undefined) })
  }, [])

  return (
    <PageWrapper maxHeight>
      <GoBackButton />
      <BookThumbnail title={book?.title} image={book?.image} />
      { book ? <BookDetails book={book} /> : <p>Loading..</p>}
      <AppBar />
    </PageWrapper>
  )
}

export default DetailedBook
