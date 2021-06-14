import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { assetsAltTexts } from '../../../constants/assetsPaths'
import { routes } from '../../../constants/routes'
import { Book as BookModel } from '../../../models/books'
import { goToPage } from '../../../router/routerCoordinator'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bolder;
  max-width: 100px;
`

const BookImage = styled.img`
  width: 100px;
  height: 150px;
  filter: drop-shadow(0px 2px 4px rgba(229, 229, 229, 0.5));
`

const Title = styled.div`
  margin-top: 9px;
  font-size: 12px;
`

const AuthorName = styled.div`
  margin: 5px 0 12px 0;
  font-size: 10px;
`

interface BookProps {
  book: BookModel
}

const Book: React.FC<BookProps> = ({ book }) => {

  const history = useHistory()

  return (
    <Wrapper onClick={() => goToPage(history, routes.detailedBook(book.id))}>
      <BookImage src={book.image} alt={assetsAltTexts.bookCover(book.title)} />
      <Title>
      {book.title}
      </Title>
      <AuthorName>
      by {book.authors}
      </AuthorName>
    </Wrapper>
  )
}

export default Book
