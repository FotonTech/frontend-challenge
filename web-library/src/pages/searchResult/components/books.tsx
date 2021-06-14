import React from 'react'
import styled from 'styled-components'
import Book from './book'

const Wrapper = styled.div`
  margin: 12px 20px 0 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`

const Books: React.FC = () => {
  return (
    <Wrapper>
      <Book />
    </Wrapper>
  )
}

export default Books
