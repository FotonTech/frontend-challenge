import React from 'react'
import styled from 'styled-components'
import CurrentReadBookCard from './currentReadBookCard'

const Wrapper = styled.div`
  margin: 30px 20px 0 20px;
`

const HeadSection = styled.div`
  display: flex;
  justify-content: space-between;
`

const ReadingSummary: React.FC = () => {
  return (
    <Wrapper>
      <HeadSection>
        <span>Currently Reading</span>
        <span>All</span>
      </HeadSection>
      <CurrentReadBookCard />
    </Wrapper>
  )
}

export default ReadingSummary
