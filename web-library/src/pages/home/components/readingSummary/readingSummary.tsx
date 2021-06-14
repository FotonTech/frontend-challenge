import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../../../components/headerSection/headerSection'
import { Book } from '../../../../models/books'
import CurrentReadBookCard from './currentReadBookCard'

const Wrapper = styled.div`
  margin: 30px 20px 0 20px;
`

interface ReadingSummaryProps {
  book?: Book
}

const ReadingSummary: React.FC<ReadingSummaryProps> = ({ book }) => {
  return (
    <Wrapper>
      <HeaderSection title={'Currently Reading'} actionButton={'All'}/>
      {book ? <CurrentReadBookCard book={book} /> : <p> Loading... </p>}
    </Wrapper>
  )
}

export default ReadingSummary
