import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 67px 20px 0 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
`

const Title = styled.div`
  margin-bottom: 7px;
`

const Author = styled.div`
  margin-bottom: 10px;
`

const Description = styled.div`
  overflow-y: scroll;
`

const BookDetails: React.FC = () => {
  return (
    <Wrapper>
      <Title>
        Hooked : How to Build Habid-Forming Products
      </Title>
      <Author>
        Nir Eyal
      </Author>
      <Description>
        How do successful companies create products people can’t put down?
        Why do some products capture widespread attention while others flop?
        Why do some products capture widespread attention while others flop?
        Why do some products capture widespread attention while others flop?
      </Description>
    </Wrapper>
  )
}

export default BookDetails
