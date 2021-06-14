import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { assetsAltTexts, assetsPaths } from '../../../../constants/assetsPaths'
import { routes } from '../../../../constants/routes'
import { Book } from '../../../../models/books'
import { goToPage } from '../../../../router/routerCoordinator'
import { getAssetsUrl } from '../../../../utils/getAssetsUrl'

const Wrapper = styled.div`
  width: 272px;
  height: 140px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background: #00173D;
  box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
  border-radius: 5px;
`

const BookInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #FEFEFE;
`

const BookTitle = styled.span`
  margin-top: 17px;
  font-size: 27px;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
`

const AuthorName = styled.span`
  margin-top: 5px;
  font-size: 14px;
  font: 200;
  font-style: italic;
`

const BookStats = styled.div`
  margin-top: 30px;
  font-size: 10px;
  display: flex;
  align-items: center;
`

const MediaContainer = styled.div`
  margin: 15px 0;
`

const BookImage = styled.img`
  width: 70px;
  height: 110px;
  object-fit: contain;
`

interface BookCardProps {
  book: Book
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const history = useHistory()

  return (
    <Wrapper onClick={() => goToPage(history, routes.detailedBook(book.id))}>
      <BookInfoWrapper>
        <BookTitle>{book.title}</BookTitle>
        <AuthorName>{book.authors}</AuthorName>
        <BookStats>
          <img src={getAssetsUrl(assetsPaths.chartIcon)} alt={assetsAltTexts.chartIcon} />
          <span>120+ read now</span>
        </BookStats>
      </BookInfoWrapper>

      <MediaContainer>
        <BookImage src={book.image} alt={assetsAltTexts.bookCover(book.title)} />
      </MediaContainer>
    </Wrapper>
  )
}

export default BookCard
