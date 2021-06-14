import React from 'react'
import styled from 'styled-components'

interface PageWrapperProps {
  maxHeight?: boolean
  minHeight?: boolean
  backgroundColor?: string
}

const Wrapper = styled.div<PageWrapperProps>`
  width: 100vw;
  height: ${({ maxHeight }) => maxHeight ? '100vh' : 'auto'};
  max-height: ${({ maxHeight }) => maxHeight ? '100vh' : 'auto'};
  min-height: ${({ minHeight }) => minHeight ? '100vh' : 'auto'};
  background-color:${({ backgroundColor }) => backgroundColor ? backgroundColor : '#FEFCF9'};
  position: absolute;
  top: 0;
  left: 0;
`

const PageWrapper: React.FC<PageWrapperProps> = ({ children, maxHeight, backgroundColor, minHeight }) => {
  return (
    <Wrapper maxHeight={maxHeight} minHeight={minHeight} backgroundColor={backgroundColor} >
      {children}
    </Wrapper>
  )
}

export default PageWrapper

