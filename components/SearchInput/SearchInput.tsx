import { useRouter } from "next/dist/client/router"
import React, { useState } from "react"
import styled from "styled-components"

import { LoadingIcon, SearchIcon } from "../Icons"
import Input from "../Input/Input"

const StyledWrapper = styled.div`
  margin-bottom: 30px;
`

type Props = {
  defaultValue?: string
}

const SearchInput = (props: Props) => {
  const { defaultValue } = props
  const [isLoading, setIsLoading] = useState(false)
  const [searchTimeout, setSearchTimeout] = useState(null)
  const router = useRouter()

  /**
   * Change handler for search input.
   * The search query will only be updated when the user stops to write for some milliseconds.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(searchTimeout)

    const query = e.target.value

    if (query) {
      setIsLoading(true)

      const timeout = setTimeout(function () {
        router.push("/book/search/" + query, undefined, {
          /** We need shallow here, so that the server function doesn't get called, only client */
          shallow: true
        })

        setIsLoading(false)
      }, 600)

      setSearchTimeout(timeout)

      return true
    }

    setIsLoading(false)
  }

  return (
    <StyledWrapper>
      <Input
        name="search"
        defaultValue={defaultValue}
        prefix={<SearchIcon />}
        sufix={isLoading ? <LoadingIcon size="16" /> : null}
        onChange={handleInputChange}
        autoFocus
      />
    </StyledWrapper>
  )
}

SearchInput.displayName = "SearchInput"

export default SearchInput
