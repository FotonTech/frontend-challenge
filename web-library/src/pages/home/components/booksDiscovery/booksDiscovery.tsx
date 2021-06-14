import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../../../components/headerSection/headerSection'
import { Books } from '../../../../models/books'
import BookCard from './bookCard'

const Wrapper = styled.div`
  margin: 0 20px;
`

interface BooksDiscoveryProps {
  books?: Books
}

const BooksDiscovery: React.FC<BooksDiscoveryProps> = ({ books }) => {
  return (
    <Wrapper>
      <HeaderSection title={'Discover new books'} actionButton={'More'} />
      {
        books ? books.items.map((book, index) =>{
          return <BookCard key={`${book.id}.${index}`} book={book} />
        }) : <p>Loading...</p>
      }
    </Wrapper>
  )
}

export default BooksDiscovery

