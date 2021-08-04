import React from "react"
import styled from "styled-components"
import { QueryClient } from "react-query"
import { dehydrate } from "react-query/hydration"
import { useRouter } from "next/dist/client/router"

import { LoadingIcon } from "../../../components/Icons"
import SearchForm from "../../../components/SearchInput/SearchInput"
import { getBooksByQuery, useBooksQuery } from "../../../queries/books"
import Layout from "../../../components/Layout/Layout"
import Link from "next/link"

const StyledWrapper = styled.div`
  margin-top: 50px;
  padding: 0 20px;
`

const StyledBooksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`
const StyledBook = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const StyledLoadingWrapper = styled.div`
  display: flex;
  padding: 30px 0;
  align-items: center;
  justify-content: center;
`

const StyledBookTitle = styled.h3`
  margin-top: 10px;
  font-family: SF Pro Display;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  color: rgba(49, 49, 49, 0.8);
`

const SearchBookPage = () => {
  const {
    query: { query }
  } = useRouter()

  const { data, isLoading } = useBooksQuery({ q: query.toString() })

  return (
    <Layout>
      <StyledWrapper>
        <SearchForm defaultValue={query.toString()} />
        found {data?.totalItems} items
        {data ? (
          <StyledBooksList>
            {data.items &&
              data.items.map((item) => {
                const {
                  id,
                  etag,
                  volumeInfo: {
                    title,
                    imageLinks: { thumbnail }
                  }
                } = item

                return (
                  <StyledBook key={etag}>
                    <Link href={"/book/" + id}>
                      <a title={title}>
                        <img alt={title} src={thumbnail} />
                      </a>
                    </Link>
                    <StyledBookTitle>{title}</StyledBookTitle>
                  </StyledBook>
                )
              })}
          </StyledBooksList>
        ) : null}
        {isLoading && (
          <StyledLoadingWrapper>
            <LoadingIcon />
          </StyledLoadingWrapper>
        )}
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
    props: { dehydratedState: dehydrate(queryClient) }
  }
}

export default SearchBookPage
