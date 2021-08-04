import { useRouter } from "next/dist/client/router"
import React, { ForwardedRef, forwardRef } from "react"
import styled from "styled-components"

import { SearchIcon } from "../Icons"
import Input from "../Input/Input"

const StyledForm = styled.form`
  margin-bottom: 30px;
`

type Props = {
  defaultValue?: string
}

const SearchForm = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLFormElement>) => {
    const { defaultValue } = props
    const router = useRouter()

    const handleSubmit = (e) => {
      e.preventDefault()

      router.push("/book/search/" + e.target.search.value)
    }

    return (
      <StyledForm ref={ref} onSubmit={handleSubmit}>
        <Input
          name="search"
          defaultValue={defaultValue}
          prefix={<SearchIcon />}
          autoFocus
        />
      </StyledForm>
    )
  }
)

SearchForm.displayName = "SearchForm"

export default SearchForm
