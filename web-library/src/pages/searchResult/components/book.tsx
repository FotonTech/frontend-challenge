import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const MediaWrapper = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  width: 100px;
  height: 150px;
`

const Title = styled.div`
  margin-top: 9px;
`

const AuthorName = styled.div`
  margin: 5px 0 12px 0;
`

const Book = () => {
  return (
    <Wrapper>
      <MediaWrapper>
        
      </MediaWrapper>
      <Title>
        title
      </Title>
      <AuthorName>
        author name
      </AuthorName>
    </Wrapper>
  )
}

export default Book
