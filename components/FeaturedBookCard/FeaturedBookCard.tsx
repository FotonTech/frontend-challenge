import React from "react"
import styled from "styled-components"

import { Book } from "@/types/books"

const StyledBookCard = styled.li`
  display: flex;
  padding: 10px 20px 10px 20px;
  margin-top: 20px;
  max-width: 330px;
  gap: 8px;

  background: #eef5db;
  box-shadow: 0px 3px 45px rgba(121, 141, 67, 0.115084);
  border-radius: 0px 3px 3px 0px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  /* identical to box height */

  color: #74776d;

  cursor: pointer;
`

const StyledBookTitle = styled.h3`
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;

  letter-spacing: 2px;

  color: #2a2b26;
`

const StyledBookCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledBookImage = styled.img`
  margin: -35px 0;
`

const StyledBookChapterText = styled.span`
  font-family: SF Pro Display;
  letter-spacing: 0.020635px;
  color: #2a2b26;
`

const StyledBookChapterTextSpecial = styled.span`
  color: ${(props) => props.theme.colors.special};
`

type Props = {
  book: Book
}

const FeaturedBookCard = (props: Props) => {
  const { book } = props

  if (!book) return null

  const {
    volumeInfo: {
      title,
      authors,
      imageLinks: { thumbnail }
    }
  } = book
  return (
    <StyledBookCard>
      <StyledBookCardInfo>
        <StyledBookImage alt={title} src={thumbnail} />
      </StyledBookCardInfo>
      <StyledBookCardInfo>
        <div>
          <StyledBookTitle>{title}</StyledBookTitle>
          {authors &&
            authors.slice(0, 1).map((author) => <p key={author}>{author}</p>)}
        </div>
        <StyledBookChapterText>
          Chapter <StyledBookChapterTextSpecial>2</StyledBookChapterTextSpecial>{" "}
          From 9
        </StyledBookChapterText>
      </StyledBookCardInfo>
    </StyledBookCard>
  )
}

export default FeaturedBookCard
