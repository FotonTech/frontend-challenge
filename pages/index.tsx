import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"

import Layout from "../components/Layout/Layout"
import ReviewsOfTheDaysImage from "../public/images/reviews-of-the-days.png"
import { BookIcon, HomeIcon, UserIcon } from "../components/Icons"
import SearchForm from "../components/SearchInput/SearchInput"
import { useBooksQuery, useUserBookshelfVolumesQuery } from "../queries/books"

const StyledBookCardList = styled.ul`
  display: flex;
  overflow-x: scroll;
`

const StyledBookCard = styled.li`
  display: flex;
  padding: 15px 20px 20px 20px;
  margin-right: 10px;
  justify-content: space-between;
  min-width: 280px;

  background: #00173d;
  color: #e7e7e1;
`

const StyledBookCardsHeader = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled.a`
  color: #4abdf1;
`

const StyledBookCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  const { data: userCurrentlyReadingResult, error: currentlyReadingError } =
    useUserBookshelfVolumesQuery(
      CURRENT_USER_ID,
      GOOGLE_BOOKS_CURRENTLY_READING_SHELF_ID
    )

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
            <StyledBookCardList>
              {booksResult &&
                booksResult.items?.map(
                  ({
                    id,
                    volumeInfo: {
                      authors,
                      title,
                      imageLinks: { thumbnail },
                      publishedDate
                    }
                  }) => (
                    <Link key={id} href={`/book/${id}`} passHref>
                      <StyledBookCard>
                        <StyledBookCardInfo>
                          <div>
                            <h3>{title}</h3>
                            {authors &&
                              authors
                                .slice(0, 1)
                                .map((author) => <p key={author}>{author}</p>)}
                          </div>

                          <div>
                            <p>120+ Read Now</p>
                            {publishedDate && <p>{publishedDate}</p>}
                          </div>
                        </StyledBookCardInfo>
                        <StyledBookCardInfo>
                          <Image
                            width={128}
                            height={171}
                            alt={title}
                            src={thumbnail}
                          />
                        </StyledBookCardInfo>
                      </StyledBookCard>
                    </Link>
                  )
                )}
            </StyledBookCardList>
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
            <StyledBookCardList>
              {userCurrentlyReadingResult &&
                userCurrentlyReadingResult.items?.map(
                  ({
                    id,
                    volumeInfo: {
                      authors,
                      title,
                      imageLinks: { thumbnail }
                    }
                  }) => (
                    <StyledBookCard key={id}>
                      <StyledBookCardInfo>
                        <div>
                          <h3>{title}</h3>
                          {authors &&
                            authors
                              .slice(0, 1)
                              .map((author) => <p key={author}>{author}</p>)}
                        </div>
                        <span>120+ Read Now</span>
                      </StyledBookCardInfo>
                      <StyledBookCardInfo>
                        <Image
                          width={128}
                          height={171}
                          alt={title}
                          src={thumbnail}
                        />
                      </StyledBookCardInfo>
                    </StyledBookCard>
                  )
                )}
            </StyledBookCardList>
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
