import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../../../components/headerSection/headerSection'
import BookReviewMedia from './bookReviewMedia'

const Wrapper = styled.div`
  margin: 45px 20px 0 20px;
`

const BookReviews: React.FC = () => {
  return (
    <Wrapper>
      <HeaderSection title={'Reviews of The Days'} actionButton={'All Video'}/>
      <BookReviewMedia />
    </Wrapper>
  )
}

export default BookReviews

