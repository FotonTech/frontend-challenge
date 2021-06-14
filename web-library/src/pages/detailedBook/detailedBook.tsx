import { useState } from "react"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import PageWrapper from "../../components/pageWrapper/pageWrapper"
import { assetsPaths } from "../../constants/assetsPaths"
import { Book } from "../../models/books"
import { getAssetsUrl } from "../../utils/getAssetsUrl"
import { getDetailedBookInformation } from "../../utils/getDetailedBookInformation"
import AppBar from "./components/appBar/appBar"
import BookDetails from "./components/bookDetails/bookDetails"
import BookThumbnail from "./components/bookThumbnail/bookThumbnail"
import { BottomCircleWave, NavyBlueBall, NavyBlueCircle, RedBall, TopCircleWave } from "./components/fillers/fillers"
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
      <RedBall src={getAssetsUrl(assetsPaths.detailedBookRedBall)} />
      <NavyBlueBall src={getAssetsUrl(assetsPaths.detailedBookNavyBlueBall)} />
      <NavyBlueCircle src={getAssetsUrl(assetsPaths.detailedBookNavyBlueCircle)} />
      <BottomCircleWave src={getAssetsUrl(assetsPaths.detailedBookBottomCircleWave)} />
      <TopCircleWave src={getAssetsUrl(assetsPaths.detailedBookTopCircleWave)} />
      <BookThumbnail title={book?.title} image={book?.image} />
      { book ? <BookDetails book={book} /> : <p>Loading..</p>}
      <AppBar />
    </PageWrapper>
  )
}

export default DetailedBook
