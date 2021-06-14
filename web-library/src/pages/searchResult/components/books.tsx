import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalStateContext } from '../../../global/globalState'
import Book from './book'

const Wrapper = styled.div`
  margin: 12px 20px 0 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`

const Books: React.FC = () => {
  const { searchResult } = useContext(GlobalStateContext)

  return (
    <Wrapper>
      {
        searchResult ? searchResult.items.map((book, index) => {
          return <Book book={book} key={`${book.id}.${index}`} />
        }): <p>Loading..</p>
      }
    </Wrapper>
  )
}

export default Books
