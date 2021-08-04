import React from "react"
import styled from "styled-components"

import { LoadingIcon } from "../../../components/Icons"
import SearchForm from "../../../components/SearchForm/SearchForm"
import { useBooksQuery } from "../../../queries/books"

type Props = {
  query: string
}

const StyledWrapper = styled.div`
  margin-top: 50px;
  padding: 0 20px;
`
const SearchBookPage = (props: Props) => {
  const { query } = props
  const { data, isLoading } = useBooksQuery({ q: query })

  if (isLoading) return <LoadingIcon />

  return (
    <StyledWrapper>
      <SearchForm defaultValue={query} />
      found {data.totalItems} items
    </StyledWrapper>
  )
}

export async function getServerSideProps(context) {
  const {
    query: { query }
  } = context

  return {
    props: { query }
  }
}

export default SearchBookPage
