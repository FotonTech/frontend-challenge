import React from "react"
import styled from "styled-components"

type Props = {
  prefix?: JSX.Element
}

const StyledWrapper = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  background: #fdfcfc;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
  border-radius: 10px;
`

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: #fdfcfc;
  color: #54565a;

  ::placeholder {
    color: #54565a;
  }
`

const StyledPrefix = styled.span`
  display: flex;
  margin-right: 10px;
`

const Input = (props: Props) => {
  const { prefix } = props

  return (
    <StyledWrapper>
      <StyledPrefix>{prefix}</StyledPrefix>
      <StyledInput name="search" placeholder="Search book" />
    </StyledWrapper>
  )
}

export default Input
