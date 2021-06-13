import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 282px;
`

const BookMedia = styled.div`
  width: 150px;
  height: 230px;
  margin-top: 84px;
  border: 1px solid black;
`

const BookThumbnail: React.FC = () => {
  return (
    <Wrapper>
      <BookMedia>

      </BookMedia>
    </Wrapper>
  )
}

export default BookThumbnail
