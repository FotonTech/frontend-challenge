import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../../../components/headerSection/headerSection'
import CurrentReadBookCard from './currentReadBookCard'

const Wrapper = styled.div`
  margin: 30px 20px 0 20px;
`

const ReadingSummary: React.FC = () => {
  return (
    <Wrapper>
      <HeaderSection title={'Currently Reading'} actionButton={'All'}/>
      <CurrentReadBookCard />
    </Wrapper>
  )
}

export default ReadingSummary
