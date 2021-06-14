import React from 'react'
import styled from 'styled-components'
import { Book } from '../../../../models/books'

const Wrapper = styled.div`
  margin: 67px 20px 0 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
`

const Title = styled.div`
  margin-bottom: 7px;
  font-size: 24px;
  font-weight: bolder;
`

const Author = styled.div`
  margin-bottom: 10px;
  color: #FF6978;
  font-size: 16px;
  font-weight: bold;
`

const Description = styled.div`
  overflow-y: scroll;
  max-height: 250px;
  font-size: 14px;
  line-height: 25px;
  color: rgba(49, 49, 49, 0.6);
`

interface BookDetailsProps {
  book: Book
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  return (
    <Wrapper>
      <Title>
        {book.title}
      </Title>
      <Author>
        {book.authors}
      </Author>
      <Description>
        {book.description}
      </Description>
    </Wrapper>
  )
}

export default BookDetails
