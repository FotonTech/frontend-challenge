import React, { ForwardedRef, forwardRef } from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  flex: 1 auto;
  align-items: center;
  background: #fdfcfc;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
  border-radius: 10px;
`

const StyledInput = styled.input`
  width: 100%;
  padding: 15px;
  border: none;
  outline: none;
  font-family: SFProText;
  font-size: 16px;
  line-height: 18px;
  background: #fdfcfc;
  color: #000000;

  ::placeholder {
    color: #54565a;
  }
`

const StyledPrefix = styled.span`
  display: flex;
  padding: 15px 10px 15px 15px;
`

const StyledSufix = styled.span`
  display: flex;
  padding: 15px 15px 15px 10px;
`

type Props = {
  defaultValue?: string
  name?: string
  placeholder?: string
  prefix?: JSX.Element
  sufix?: JSX.Element
  autoFocus?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      autoFocus,
      defaultValue,
      name,
      onChange,
      placeholder,
      prefix,
      sufix
    } = props

    return (
      <StyledWrapper>
        {prefix && <StyledPrefix>{prefix}</StyledPrefix>}
        <StyledInput
          ref={ref}
          defaultValue={defaultValue}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          autoFocus={autoFocus}
        />
        {sufix && <StyledSufix>{sufix}</StyledSufix>}
      </StyledWrapper>
    )
  }
)

Input.displayName = "Input"

export default Input
