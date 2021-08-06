import React from "react"
import styled from "styled-components"
import { dehydrate } from "react-query/hydration"
import { QueryClient } from "react-query"
import { useRouter } from "next/dist/client/router"
import ReactHtmlParser from "react-html-parser"
import Image from "next/image"

import Layout from "@/components/Layout/Layout"
import { useVolumeByIdQuery, getVolumeById } from "@/queries/books"
import {
  BackIcon,
  BookOpenIcon,
  HeadphonesIcon,
  LoadingIcon,
  ShareIcon
} from "@/components/Icons"

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`

const StyledContentWrapper = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: column;
`

const StyledAuthorText = styled.p(
  ({ theme }) => `
    font-family: SFProDisplay;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.670588px;
    color: ${theme.colors.special};
  `
)

const StyledDescriptionText = styled.div`
  margin-top: 10px;
  font-family: SFProText;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.2px;

  color: rgba(49, 49, 49, 0.6);
`

const StyledImageWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  box-shadow: 0 25px 40px -40px #000;
`

const StyledHeader = styled.div`
  display: flex;
  background: url("/images/book-background.png") no-repeat;
  flex-direction: column;
  background-position: top;
  align-items: center;
  margin-bottom: 36px;

  @media (min-width: 768px) {
    background: url("/images/book-background-desktop.png") no-repeat;
  }
`

const StyledTitle = styled.h1`
  letter-spacing: 1.5px;
  color: #36383a;

  span {
    font-weight: bold;
  }
`

const StyledLoadingWrapper = styled.div`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledBackIconWrapper = styled.div`
  margin-top: 55px;
  margin-left: 33px;
  align-self: flex-start;
`

const StyledBackAnchor = styled.a`
  padding: 8px;

  svg {
    transition: transform 0.1s linear;
  }

  &:hover {
    svg {
      transform: scale(1.3);
    }
  }
`

const StyledFloatingList = styled.ul`
  position: fixed;
  max-width: 335px;
  bottom: 53px;
  left: 20px;
  right: 20px;
  padding: 20px;
  margin: auto;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  background: #fff;

  li {
    &:not(:first-child) {
      padding-left: 26px;
      border-left: 1px solid rgba(151, 151, 151, 0.2);
    }
  }

  a {
    display: flex;
    align-items: flex-start;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.heading};
  }

  svg {
    margin-right: 10px;
  }
`

const BookPage = () => {
  const {
    query: { id },
    back
  } = useRouter()
  const { data, error, isLoading } = useVolumeByIdQuery(id)

  const handleBackButtonKeyDown = (e) => {
    const keyCode = e.keyCode

    if (keyCode === 13) {
      back()
    }
  }

  if (isLoading)
    return (
      <StyledLoadingWrapper>
        <LoadingIcon />
      </StyledLoadingWrapper>
    )

  if (error)
    return (
      <p>
        {error}.
        <a title="Go back" onClick={back}>
          Go back
        </a>
      </p>
    )

  const {
    volumeInfo: { title, subtitle, description, authors, imageLinks }
  } = data
  return (
    <Layout>
      <StyledMain>
        <StyledHeader>
          <StyledBackIconWrapper>
            <StyledBackAnchor
              title="Return to previous page"
              onClick={back}
              onKeyDown={handleBackButtonKeyDown}
              tabIndex={0}
            >
              <BackIcon />
            </StyledBackAnchor>
          </StyledBackIconWrapper>
          <StyledImageWrapper>
            <Image
              width={153}
              height={229}
              alt={title}
              src={imageLinks.thumbnail}
            />
          </StyledImageWrapper>
        </StyledHeader>

        <StyledContentWrapper>
          <StyledTitle>
            <span>{title}</span>
            {subtitle && ` : ${subtitle}`}
          </StyledTitle>

          {authors?.slice(0, 2).map((author) => (
            <StyledAuthorText key={author}>{author}</StyledAuthorText>
          ))}

          <StyledDescriptionText>
            {ReactHtmlParser(description)}
          </StyledDescriptionText>
        </StyledContentWrapper>
        <StyledFloatingList>
          <li>
            <a href="#" title="Read">
              <BookOpenIcon />
              Read
            </a>
          </li>
          <li>
            <a href="#" title="Listen">
              <HeadphonesIcon />
              Listen
            </a>
          </li>
          <li>
            <a href="#" title="Share">
              <ShareIcon />
              Share
            </a>
          </li>
        </StyledFloatingList>
      </StyledMain>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const {
    query: { id }
  } = context

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(["volumeById", id], () => getVolumeById(id))

  return {
    props: { dehydratedState: dehydrate(queryClient) }
  }
}

export default BookPage
