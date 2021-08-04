import React from "react"
import styled from "styled-components"
import Image from "next/image"
import { QueryClient } from "react-query"
import { dehydrate } from "react-query/hydration"

import { LoadingIcon } from "../../../components/Icons"
import SearchForm from "../../../components/SearchInput/SearchInput"
import { getBooksByQuery, useBooksQuery } from "../../../queries/books"
import Layout from "../../../components/Layout/Layout"

type Props = {
  query: string
}

const StyledWrapper = styled.div`
  margin-top: 50px;
  padding: 0 20px;
`

const StyledBooksList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
`
const StyledBook = styled.li`
  display: flex;
  flex-direction: column;
`

const SearchBookPage = (props: Props) => {
  const { query } = props
  const { data, isLoading } = useBooksQuery({ q: query })

  if (isLoading) return <LoadingIcon />

  return (
    <Layout>
      <StyledWrapper>
        <SearchForm defaultValue={query} />
        found {data.totalItems} items
        <StyledBooksList>
          {data &&
            data.items &&
            data.items.map((item) => {
              const {
                etag,
                volumeInfo: {
                  title,
                  imageLinks: { thumbnail }
                }
              } = item

              return (
                <StyledBook key={etag}>
                  <Image width={105} height={153} alt={title} src={thumbnail} />
                  {title}
                </StyledBook>
              )
            })}
        </StyledBooksList>
      </StyledWrapper>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const {
    query: { query }
  } = context

  const queryClient = new QueryClient()

  const queryParams = {
    q: query
  }
  await queryClient.prefetchQuery(["books", queryParams], () =>
    getBooksByQuery(queryParams)
  )

  return {
    props: { dehydratedState: dehydrate(queryClient), query }
  }
}

export default SearchBookPage
