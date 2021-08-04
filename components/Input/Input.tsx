import React, { ForwardedRef, forwardRef } from "react"
import styled from "styled-components"

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

type Props = {
  defaultValue?: string
  name?: string
  placeholder?: string
  prefix?: JSX.Element
  autoFocus?: boolean
}

const Input = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const { autoFocus, defaultValue, name, placeholder, prefix } = props

    return (
      <StyledWrapper>
        <StyledPrefix>{prefix}</StyledPrefix>
        <StyledInput
          ref={ref}
          defaultValue={defaultValue}
          name={name}
          placeholder={placeholder}
          autoFocus={autoFocus}
        />
      </StyledWrapper>
    )
  }
)

Input.displayName = "Input"

export default Input
