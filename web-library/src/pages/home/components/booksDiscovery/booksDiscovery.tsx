import React from 'react'
import styled from 'styled-components'
import BookCard from './bookCard'

const Wrapper = styled.div`
  margin: 0 20px;
`

const HeadSection = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`

const BooksDiscovery: React.FC = () => {
  return (
    <Wrapper>
      <HeadSection>
        <span>Discover new books</span>
        <span>More</span>
      </HeadSection>
      <BookCard />
    </Wrapper>
  )
}

export default BooksDiscovery

