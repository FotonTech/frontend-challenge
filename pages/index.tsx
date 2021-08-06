import styled from "styled-components"
import Link from "next/link"
import { dehydrate } from "react-query/hydration"
import { QueryClient } from "react-query"

import Layout from "@/components/Layout/Layout"
import { BookIcon, HomeIcon, UserIcon } from "@/components/Icons"
import SearchInput from "@/components/SearchInput/SearchInput"
import {
  getBooksByQuery,
  useBooksQuery,
  useUserBookshelfVolumesQuery,
  getUserBookshelfVolumes
} from "@/queries/books"
import BookCardsSwiper from "@/components/BookCardsSwiper/BookCardsSwiper"
import FeaturedBookCard from "@/components/FeaturedBookCard/FeaturedBookCard"

const StyledBookCardsHeader = styled.div`
  display: flex;
  margin-bottom: 7px;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled.a`
  font-family: SFProText;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #4abdf1;
`

const StyledTitleSpecial = styled.span(
  ({ theme }) => `
  color: ${theme.colors.special};
  font-weight: bold;
`
)

const StyledMain = styled.main`
  padding-top: 50px;
`

const StyledHeading = styled.h1`
  margin-bottom: 30px;
`

const StyledSpacingWrapper = styled.div`
  padding: 0 20px;
`

const StyledLeftSpacingContentWrapper = styled.div`
  padding-left: 20px;

  @media (min-width: 768px) {
    padding-right: 20px;
  }
`

const StyledRightSpacingContentWrapper = styled.div`
  padding-right: 20px;

  @media (min-width: 768px) {
    padding-left: 20px;
  }
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
  font-family: SFProDisplay;
  font-size: 10px;
  line-height: 12px;
  color: ${({ theme }) => theme.colors.text};
`

const StyledNavListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledNavListItemText = styled.span`
  margin-top: 10px;
`

const StyledSearchInputWrapper = styled.div`
  padding: 0 20px;
  margin-bottom: 30px;
`

const StyledReviewImg = styled.img`
  border-radius: 5px 5px 0px 0px;
`

const StyledReviewImgWrapper = styled.div`
  background-image: url(/images/book-background-oval.png);
  background-position: 0 100%;
  background-repeat: no-repeat;
`

const CURRENT_USER_ID = "107452890772828077812"
const GOOGLE_BOOKS_CURRENTLY_READING_SHELF_ID = "3"

export default function Home() {
  const { data: booksResult, error: booksError } = useBooksQuery(null)
  const { data: featuredBookshelfVolumesResult, error: currentlyReadingError } =
    useUserBookshelfVolumesQuery({
      bookshelfId: GOOGLE_BOOKS_CURRENTLY_READING_SHELF_ID,
      userId: CURRENT_USER_ID
    })

  const featuredBook = featuredBookshelfVolumesResult?.items[0]

  return (
    <Layout>
      <StyledMain>
        <StyledSearchInputWrapper>
          <SearchInput />
        </StyledSearchInputWrapper>

        <StyledSpacingWrapper>
          <StyledHeading>
            Hi, <StyledTitleSpecial>Mehmed Al Fatih</StyledTitleSpecial>
          </StyledHeading>
        </StyledSpacingWrapper>

        <StyledDiscoverWrapper>
          <StyledSpacingWrapper>
            <StyledBookCardsHeader>
              <h2>Discover new book</h2>
              <Link href={"/book/search/" + encodeURI("new books")} passHref>
                <StyledLink title="More">More</StyledLink>
              </Link>
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
              <StyledLink href="#" title="All">
                All
              </StyledLink>
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
            <StyledLink href="#" title="All Video">
              All Video
            </StyledLink>
          </StyledBookCardsHeader>
        </StyledSpacingWrapper>

        <StyledSpacingWrapper>
          <StyledReviewImgWrapper>
            <StyledReviewImg
              alt="Review of the day"
              src="/images/review-of-the-day.jpg"
            />
          </StyledReviewImgWrapper>
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

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(["books", null], () => getBooksByQuery(null))

  const userBookshelfParams = {
    bookshelfId: GOOGLE_BOOKS_CURRENTLY_READING_SHELF_ID,
    userId: CURRENT_USER_ID
  }

  await queryClient.prefetchQuery(
    ["userBookshelfVolumes", userBookshelfParams],
    () => getUserBookshelfVolumes(userBookshelfParams)
  )

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
    }
  }
}
