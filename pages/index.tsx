import styled from "styled-components"
import Image from "next/image"

import Layout from "../components/Layout"
import BookImage from "../public/Sprint.png"

const StyledBookCardList = styled.ul``

const StyledBookCard = styled.li`
  display: flex;
  padding: 15px 20px 20px 20px;
  justify-content: space-between;

  background: #00173d;
  color: #e7e7e1;
`

const StyledBookCardsHeader = styled.div`
  display: flex;
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

export default function Home() {
  return (
    <Layout>
      <main>
        <input />

        <h1>Hi, Mehmed Al Fatih</h1>

        <div>
          <StyledBookCardsHeader>
            <h2>Discover new book</h2>
            <StyledLink>More</StyledLink>
          </StyledBookCardsHeader>
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
        </div>
        <div>
          <StyledBookCardsHeader>
            <h2>Currently Reading</h2>
            <StyledLink>All</StyledLink>
          </StyledBookCardsHeader>
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
        </div>
        <div>
          <StyledBookCardsHeader>
            <h2>Reviews of The Days</h2>
            <StyledLink>All Video</StyledLink>
          </StyledBookCardsHeader>
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
        </div>
      </main>
    </Layout>
  )
}
