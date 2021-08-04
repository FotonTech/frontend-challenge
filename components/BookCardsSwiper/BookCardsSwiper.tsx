import React from "react"
import styled from "styled-components"

import { Book } from "@/types/books"
import { StatisticsIcon } from "@/components/Icons"

const StyledBookCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`

const StyledBookCard = styled.li`
  display: flex;
  padding: 15px 20px 20px 20px;
  margin-right: 10px;
  position: relative;
  justify-content: space-between;
  min-width: 280px;

  background: #00173d;
  box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
  border-radius: 5px;

  color: #e7e7e1;
  cursor: pointer;

  background-image: url("images/book-background-oval.png");
  background-position: 0 100%;
  background-repeat: no-repeat;
`

const StyledBookTitle = styled.h3`
  margin-bottom: 4px;
  max-width: 120px;
  line-height: 36px;

  /** Max of 2 lines */
  max-height: 72px;

  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  letter-spacing: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #fefefe;
`

const StyledAuthorText = styled.p`
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height */

  letter-spacing: 1.28889px;
`

const StyledReadNowText = styled.span`
  display: flex;
  align-items: flex-end;
  font-family: SFProDisplay;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.020635px;

  vertical-align: middle;
`

const StyledStatisticsIcon = styled(StatisticsIcon)`
  margin-right: 4px;
`

const StyledBookCardList = styled.ul`
  display: flex;
  overflow-x: scroll;
`

// const colors = ["#00173D", "#451475"]

type Props = {
  books: Book[]
  isActive?: boolean
}

const BookCard = (props: Props) => {
  const { books } = props

  if (!books) return null

  return (
    <StyledBookCardList>
      {books &&
        books.map((book) => {
          const {
            id,
            volumeInfo: {
              authors,
              imageLinks: { thumbnail },
              title
            }
          } = book
          return (
            <StyledBookCard key={id}>
              <StyledBookCardInfo>
                <div>
                  <StyledBookTitle>{title}</StyledBookTitle>
                  {authors &&
                    authors
                      .slice(0, 1)
                      .map((author) => (
                        <StyledAuthorText key={author}>
                          {author}
                        </StyledAuthorText>
                      ))}
                </div>
                <StyledReadNowText>
                  <StyledStatisticsIcon />
                  120+ Read Now
                </StyledReadNowText>
              </StyledBookCardInfo>
              <StyledBookCardInfo>
                <img alt={title} src={thumbnail} />
              </StyledBookCardInfo>
            </StyledBookCard>
          )
        })}
    </StyledBookCardList>
  )
}

export default BookCard
