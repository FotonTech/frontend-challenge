import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100px;
  min-width: 300px;
  padding: 0 19px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  margin-left: -20px;
`

const BookInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`

const BookTitle = styled.span`
  margin-top: 10px;
`

const AuthorName = styled.span`
  margin-top: 5px;
`

const BookStats = styled.div`
  margin-top: 22px;
  margin-bottom: 12px;
`

const MediaContainer = styled.div`
  height: 136px;
  border: 1px solid black;
`

const CurrentReadBookCard: React.FC = () => {
  return (
    <Wrapper>
      <MediaContainer>
        Media container
      </MediaContainer>

      <BookInfoWrapper>
        <BookTitle>Book title</BookTitle>
        <AuthorName>By Author name</AuthorName>
        <BookStats>
          <span>icon</span>
          <span>Chapter</span>
        </BookStats>
      </BookInfoWrapper>
    </Wrapper>
  )
}

export default CurrentReadBookCard
