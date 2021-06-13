import React from 'react'
import styled from 'styled-components'

interface PageWrapperProps {
  maxHeight?: boolean
}

const Wrapper = styled.div<PageWrapperProps>`
  width: 100vw;
  height: ${({ maxHeight }) => maxHeight ? '100vh' : 'auto'};
  max-height: ${({ maxHeight }) => maxHeight ? '100vh' : 'auto'};
`

const PageWrapper: React.FC<PageWrapperProps> = ({ children, maxHeight }) => {
  return (
    <Wrapper maxHeight={maxHeight}>
      {children}
    </Wrapper>
  )
}

export default PageWrapper

