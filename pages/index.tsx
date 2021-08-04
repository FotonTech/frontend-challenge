import styled from "styled-components"
import Image from "next/image"

import Layout from "@/components/Layout/Layout"
import ReviewsOfTheDaysImage from "@/public/images/reviews-of-the-days.png"
import { BookIcon, HomeIcon, UserIcon } from "@/components/Icons"
import SearchForm from "@/components/SearchInput/SearchInput"
import { useBooksQuery, useUserBookshelfVolumesQuery } from "@/queries/books"
import BookCardsSwiper from "@/components/BookCardsSwiper/BookCardsSwiper"
import FeaturedBookCard from "@/components/FeaturedBookCard/FeaturedBookCard"

const StyledBookCardsHeader = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled.a`
  color: #4abdf1;
`

const StyledTitleSpecial = styled.span(
  ({ theme }) => `
color: ${theme.colors.special};
`
)

const StyledMain = styled.main`
  padding-top: 50px;
`

const StyledSpacingWrapper = styled.div`
  padding: 0 20px;
`

const StyledLeftSpacingContentWrapper = styled.div`
  padding-left: 20px;
`

const StyledRightSpacingContentWrapper = styled.div`
  padding-right: 20px;
`

const StyledDiscoverWrapper = styled.div`
  margin-bottom: 30px;
`

const StyledReadingWrapper = styled.div`
  margin-bottom: 45px;
`

const StyledFloatingNavbar = styled.nav`
  position: fixed;
  padding: 10px 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
`

const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-around;
  font-family: "SFProDisplay";
  font-size: 10px;
  line-height: 12px;

  color: #313131;
`

const StyledNavListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledNavListItemText = styled.span`
  margin-top: 10px;
`

const CURRENT_USER_ID = "107452890772828077812"
const GOOGLE_BOOKS_CURRENTLY_READING_SHELF_ID = "3"

export default function Home() {
  const { data: booksResult, error: booksError } = useBooksQuery()
  const { data: featuredBookshelfVolumesResult, error: currentlyReadingError } =
    useUserBookshelfVolumesQuery(
      CURRENT_USER_ID,
      GOOGLE_BOOKS_CURRENTLY_READING_SHELF_ID
    )

  const featuredBook = featuredBookshelfVolumesResult?.items[0]

  return (
    <Layout>
      <StyledMain>
        <StyledSpacingWrapper>
          <SearchForm />
        </StyledSpacingWrapper>

        <StyledSpacingWrapper>
          <h1>
            Hi, <StyledTitleSpecial>Mehmed Al Fatih</StyledTitleSpecial>
          </h1>
        </StyledSpacingWrapper>

        <StyledDiscoverWrapper>
          <StyledSpacingWrapper>
            <StyledBookCardsHeader>
              <h2>Discover new book</h2>
              <StyledLink>More</StyledLink>
            </StyledBookCardsHeader>
          </StyledSpacingWrapper>

          <StyledLeftSpacingContentWrapper>
            <BookCardsSwiper books={booksResult?.items} />

            {booksError && <p>{booksError}</p>}
          </StyledLeftSpacingContentWrapper>
        </StyledDiscoverWrapper>

        <StyledReadingWrapper>
          <StyledSpacingWrapper>
            <StyledBookCardsHeader>
              <h2>Currently Reading</h2>
              <StyledLink>All</StyledLink>
            </StyledBookCardsHeader>
          </StyledSpacingWrapper>

          <StyledRightSpacingContentWrapper>
            {featuredBook && <FeaturedBookCard book={featuredBook} />}

            {currentlyReadingError && currentlyReadingError}
          </StyledRightSpacingContentWrapper>
        </StyledReadingWrapper>

        <StyledSpacingWrapper>
          <StyledBookCardsHeader>
            <h2>Reviews of The Days</h2>
            <StyledLink>All Video</StyledLink>
          </StyledBookCardsHeader>
        </StyledSpacingWrapper>

        <StyledSpacingWrapper>
          <Image src={ReviewsOfTheDaysImage} />
        </StyledSpacingWrapper>
        <StyledFloatingNavbar>
          <StyledNavList>
            <StyledNavListItem>
              <HomeIcon />
              <StyledNavListItemText>Home</StyledNavListItemText>
            </StyledNavListItem>

            <StyledNavListItem>
              <BookIcon />
              <StyledNavListItemText>Libraries</StyledNavListItemText>
            </StyledNavListItem>

            <StyledNavListItem>
              <UserIcon />

              <StyledNavListItemText>Profile</StyledNavListItemText>
            </StyledNavListItem>
          </StyledNavList>
        </StyledFloatingNavbar>
      </StyledMain>
    </Layout>
  )
}
