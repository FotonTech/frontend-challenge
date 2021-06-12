import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 272px;
  height: 139px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`

const BookInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const BookTitle = styled.span`
  margin-top: 17px;
`

const AuthorName = styled.span`
  margin-top: 5px;
`

const BookStats = styled.div`
  margin-top: 30px;
`

const MediaContainer = styled.div`
`

const BookCard: React.FC = () => {
  return (
    <Wrapper>
      <BookInfoWrapper>
        <BookTitle>Book title</BookTitle>
        <AuthorName>Author name</AuthorName>
        <BookStats>
          <span>icon </span>
          <span>120+ read now</span>
        </BookStats>
      </BookInfoWrapper>

      <MediaContainer>
        Media container
      </MediaContainer>
    </Wrapper>
  )
}

export default BookCard
