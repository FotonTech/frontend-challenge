import React from 'react'
import styled from 'styled-components'
import BookReviewMedia from './bookReviewMedia'

const Wrapper = styled.div`
  margin: 45px 20px 0 20px;
`

const HeadSection = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`

const BookReviews: React.FC = () => {
  return (
    <Wrapper>
      <HeadSection>
        <span>Reviews of The Days</span>
        <span>All Video</span>
      </HeadSection>
      <BookReviewMedia />
    </Wrapper>
  )
}

export default BookReviews

