import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 100vw;
  width: 100vw;
`

const PageWrapper: React.FC = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  )
}

export default PageWrapper

