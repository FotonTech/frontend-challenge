import React, { Fragment } from "react"
import styled from "styled-components"
import { QueryClient } from "react-query"
import { dehydrate } from "react-query/hydration"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import Image from "next/image"

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
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`
const StyledBook = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 220px;
  filter: drop-shadow(0px 2px 4px rgba(229, 229, 229, 0.5));

  img {
    height: 150px;
    border-radius: 5px;
    max-width: 100px;
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
  font-family: SFProDisplay;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;

  /** Max of 3 lines */
  max-height: 42px;
  max-width: 100px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  color: rgba(49, 49, 49, 0.8);
`

const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  margin-bottom: 42px;
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

const StyledAuthorText = styled.p`
  margin-top: 5px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  color: rgba(49, 49, 49, 0.8);
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
          <Link href="/" passHref>
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
                          authors,
                          title,
                          imageLinks: { thumbnail }
                        }
                      } = item

                      return (
                        <StyledBook key={etag}>
                          <Link href={"/book/" + id} shallow={true}>
                            <a title={title}>
                              <Image
                                width={100}
                                height={150}
                                alt={title}
                                src={thumbnail.replace("http", "https")}
                              />
                            </a>
                          </Link>
                          <Link href={"/book/" + id} shallow={true}>
                            <StyledBookTitle>
                              <a title={title}>{title}</a>
                            </StyledBookTitle>
                          </Link>

                          {authors && (
                            <StyledAuthorText>
                              by&nbsp;
                              {authors.slice(0, 3).map((author, index) => (
                                <Fragment key={author}>
                                  {author}
                                  {authors.length > index + 1 && index !== 2
                                    ? ", "
                                    : index === 2
                                    ? "..."
                                    : null}
                                </Fragment>
                              ))}
                            </StyledAuthorText>
                          )}
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
