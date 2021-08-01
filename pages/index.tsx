import styled from "styled-components"
import Image from "next/image"

import Layout from "../components/Layout/Layout"
import BookImage from "../public/Sprint.png"
import Input from "../components/Input/Input"
import { BookIcon, HomeIcon, SearchIcon, UserIcon } from "../components/Icons"
import { useBooksQuery } from "../queries/books"

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
  padding: 0 30px;
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

const StyledTitleSpecial = styled.span`
  color: #ff6978;
`

const StyledForm = styled.form`
  margin-bottom: 30px;
`

const StyledMain = styled.main`
  padding-top: 50px;
`

const StyledContentWrapper = styled.div`
  padding: 0 30px;
`

const StyledLeftSpacingContentWrapper = styled.div`
  padding-left: 30px;
`

const StyledRightSpacingContentWrapper = styled.div`
  padding-right: 30px;
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

export default function Home(props) {
  const { data, error } = useBooksQuery()

  return (
    <Layout>
      <StyledMain>
        <StyledContentWrapper>
          <StyledForm>
            <Input prefix={<SearchIcon />} />
          </StyledForm>
        </StyledContentWrapper>

        <StyledContentWrapper>
          <h1>
            Hi, <StyledTitleSpecial>Mehmed Al Fatih</StyledTitleSpecial>
          </h1>
        </StyledContentWrapper>

        <StyledDiscoverWrapper>
          <StyledBookCardsHeader>
            <h2>Discover new book</h2>
            <StyledLink>More</StyledLink>
          </StyledBookCardsHeader>

          <StyledLeftSpacingContentWrapper>
            <StyledBookCardList>
              {data &&
                data.items?.map(({ volumeInfo: { authors, title } }) => (
                  <StyledBookCard>
                    <StyledBookCardInfo>
                      <div>
                        <h3>{title}</h3>
                        {authors &&
                          authors.slice(0, 1).map((author) => <p>{author}</p>)}
                      </div>
                      <span>120+ Read Now</span>
                    </StyledBookCardInfo>
                    <StyledBookCardInfo>
                      <img src="Sprint.png" />
                    </StyledBookCardInfo>
                  </StyledBookCard>
                ))}
            </StyledBookCardList>
            {error && <p>{error}</p>}
          </StyledLeftSpacingContentWrapper>
        </StyledDiscoverWrapper>

        <StyledReadingWrapper>
          <StyledBookCardsHeader>
            <h2>Currently Reading</h2>
            <StyledLink>All</StyledLink>
          </StyledBookCardsHeader>

          <StyledRightSpacingContentWrapper>
            <StyledBookCardList>
              <StyledBookCard>
                <StyledBookCardInfo>
                  <div>
                    <h3>Hooked</h3>
                    <p>Nir Eyal</p>
                  </div>
                  <span>120+ Read Now</span>
                </StyledBookCardInfo>
                <StyledBookCardInfo>
                  <Image src={BookImage} />
                </StyledBookCardInfo>
              </StyledBookCard>
            </StyledBookCardList>
          </StyledRightSpacingContentWrapper>
        </StyledReadingWrapper>

        <StyledBookCardsHeader>
          <h2>Reviews of The Days</h2>
          <StyledLink>All Video</StyledLink>
        </StyledBookCardsHeader>

        <StyledContentWrapper>
          <StyledBookCardList>
            <StyledBookCard>
              <StyledBookCardInfo>
                <div>
                  <h3>Hooked</h3>
                  <p>Nir Eyal</p>
                </div>
                <span>120+ Read Now</span>
              </StyledBookCardInfo>
              <StyledBookCardInfo>
                <Image src={BookImage} />
              </StyledBookCardInfo>
            </StyledBookCard>
          </StyledBookCardList>
        </StyledContentWrapper>
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
