import React, { Fragment } from "react"
import styled from "styled-components"
import { QueryClient } from "react-query"
import { dehydrate } from "react-query/hydration"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"

import { BackIcon, LoadingIcon } from "@/components/Icons"
import SearchInput from "@/components/SearchInput/SearchInput"
import { getBooksByQuery, useBooksInfiniteQuery } from "@/queries/books"
import Layout from "@/components/Layout/Layout"
import useIntersectionObserver from "hooks/useIntersectionObserver"

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
  min-height: 240px;

  img {
    min-height: 150px;
  }
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

const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  margin-bottom: 30px;
`

const StyledBackAnchor = styled.a`
  padding: 8px;
  margin-right: 8px;

  svg {
    transition: transform 0.1s linear;
  }

  &:hover {
    svg {
      transform: scale(1.3);
    }
  }
`

const StyledLoadMoreButton = styled.button`
  visibility: hidden;
`

const ITEMS_PER_PAGE = 20

const SearchBookPage = () => {
  const {
    query: { query }
  } = useRouter()

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useBooksInfiniteQuery({
      q: query?.toString(),
      maxResults: ITEMS_PER_PAGE.toString()
    })

  const loadMoreButtonRef = React.useRef()

  /** Calls fetch next page whenever the user scrolls to the load more button */
  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage
  })

  return (
    <Layout>
      <StyledWrapper>
        <StyledHeaderWrapper>
          <Link href="/">
            <StyledBackAnchor title="Return to home page">
              <BackIcon />
            </StyledBackAnchor>
          </Link>
          <SearchInput defaultValue={query?.toString()} />
        </StyledHeaderWrapper>

        {data ? (
          <StyledBooksList>
            {data.pages &&
              data.pages.map((page) => {
                return (
                  <Fragment key={page.items[0].etag}>
                    {page.items.map((item) => {
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
                          <Link href={"/book/" + id} shallow={true}>
                            <a title={title}>
                              <img alt={title} src={thumbnail} />
                            </a>
                          </Link>
                          <StyledBookTitle>{title}</StyledBookTitle>
                        </StyledBook>
                      )
                    })}
                  </Fragment>
                )
              })}
          </StyledBooksList>
        ) : null}

        {(isLoading || isFetchingNextPage) && (
          <StyledLoadingWrapper>
            <LoadingIcon />
          </StyledLoadingWrapper>
        )}

        <div>
          <StyledLoadMoreButton ref={loadMoreButtonRef} />
        </div>
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
    q: query,
    maxResults: ITEMS_PER_PAGE.toString()
  }

  await queryClient.prefetchInfiniteQuery(["books", queryParams], () =>
    getBooksByQuery(queryParams)
  )

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
    }
  }
}

export default SearchBookPage
