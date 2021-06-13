import React from 'react'
import styled from 'styled-components'

interface PageWrapperProps {
  maxHeight?: boolean
}

const Wrapper = styled.div<PageWrapperProps>`
  width: 100vw;
  height: ${({ maxHeight }) => maxHeight ? '100vh' : 'auto'};
  max-height: ${({ maxHeight }) => maxHeight ? '100vh' : 'auto'};
  background-color:#FEFAF6;
  position: absolute;
  top: 0;
  left: 0;
`

const PageWrapper: React.FC<PageWrapperProps> = ({ children, maxHeight }) => {
  return (
    <Wrapper maxHeight={maxHeight}>
      {children}
    </Wrapper>
  )
}

export default PageWrapper

