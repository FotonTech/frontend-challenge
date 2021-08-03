import React from "react"
import styled from "styled-components"
import Image from "next/image"
import { dehydrate } from "react-query/hydration"
import { QueryClient } from "react-query"

import Layout from "../../components/Layout/Layout"
import { useVolumeByIdQuery, getVolumeById } from "../../queries/books"
import { LoadingIcon } from "../../components/Icons"

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
color: ${theme.colors.special};
`
)

const StyledDescriptionText = styled.p`
  margin-top: 10px;
  font-family: SFProText;
  font-size: 14px;
  line-height: 25px;
  /* or 179% */

  letter-spacing: 0.2px;

  color: rgba(49, 49, 49, 0.6);
`

const StyledImageWrapper = styled.div`
  display: flex;
  margin-top: 80px;
  box-shadow: 0 25px 40px -40px #000;
`

const StyledHeader = styled.div`
  display: flex;
  background: url("/images/book-background.png") no-repeat;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
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

type Props = {
  id: string
}

const BookPage = (props: Props) => {
  const { id } = props
  const { data, error, isLoading } = useVolumeByIdQuery(id)

  if (isLoading)
    return (
      <StyledLoadingWrapper>
        <LoadingIcon />
      </StyledLoadingWrapper>
    )

  if (error) return <p>error!</p>
  if (!data) return <p></p>

  const {
    volumeInfo: { title, description, authors, imageLinks }
  } = data

  return (
    <Layout>
      <StyledMain>
        <StyledHeader>
          <StyledImageWrapper>
            <Image
              alt={title}
              width={151}
              height={234}
              src={imageLinks.thumbnail}
            />
          </StyledImageWrapper>
        </StyledHeader>

        <StyledContentWrapper>
          <h1>{title}</h1>

          {authors.slice(0, 2).map((author) => (
            <StyledAuthorText key={author}>{author}</StyledAuthorText>
          ))}

          <StyledDescriptionText
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </StyledContentWrapper>
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
    props: { dehydratedState: dehydrate(queryClient), id }
  }
}

export default BookPage
