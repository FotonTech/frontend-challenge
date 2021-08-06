import { useRouter } from "next/dist/client/router"
import React, { useState } from "react"

import { LoadingIcon, SearchIcon } from "@/components/Icons"
import Input from "@/components/Input/Input"

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
    <Input
      name="search"
      defaultValue={defaultValue}
      prefix={<SearchIcon />}
      sufix={isLoading ? <LoadingIcon size="16" /> : null}
      onChange={handleInputChange}
      placeholder="Search book"
    />
  )
}

SearchInput.displayName = "SearchInput"

export default SearchInput
