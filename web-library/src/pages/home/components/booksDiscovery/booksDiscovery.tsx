import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../../../components/headerSection/headerSection'
import BookCard from './bookCard'

const Wrapper = styled.div`
  margin: 0 20px;
`

const BooksDiscovery: React.FC = () => {
  return (
    <Wrapper>
      <HeaderSection title={'Discover new books'} actionButton={'More'} />
      <BookCard />
    </Wrapper>
  )
}

export default BooksDiscovery

