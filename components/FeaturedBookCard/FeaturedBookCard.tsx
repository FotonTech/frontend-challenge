import React from "react"
import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"

import { BooksApiVolume } from "@/types/books-api"
import { ChapterIcon } from "../Icons"

const StyledBookCard = styled.a`
  display: flex;
  padding: 10px 20px 10px 20px;
  margin-top: 20px;
  max-width: 331px;
  max-height: 100px;
  gap: 10px;

  background: #eef5db;
  box-shadow: 0px 3px 45px rgba(121, 141, 67, 0.115084);
  border-radius: 0px 3px 3px 0px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #74776d;
  cursor: pointer;
`

const StyledBookTitle = styled.h3`
  font-family: PlayfairDisplay;
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

const StyledBookImageWrapper = styled.div`
  margin: -25px 0;
  max-height: 130px;
  filter: drop-shadow(5px 7px 32px rgba(140, 170, 58, 0.193701));
`

const StyledBookChapterText = styled.span`
  display: flex;
  align-items: center;
  font-family: SFProDisplay;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.020635px;
  color: #2a2b26;

  svg {
    margin-right: 3px;
  }

  span {
    color: ${(props) => props.theme.colors.special};
    font-weight: 700;
  }
`

type Props = {
  book: BooksApiVolume
}

const FeaturedBookCard = (props: Props) => {
  const { book } = props

  if (!book) return null

  const {
    id,
    volumeInfo: {
      title,
      authors,
      imageLinks: { thumbnail }
    }
  } = book

  return (
    <Link href={`/book/${id}`} passHref>
      <StyledBookCard>
        <StyledBookCardInfo>
          <StyledBookImageWrapper>
            <Image
              width={88}
              height={130}
              alt={title}
              src={thumbnail.replace("http", "https")}
            />
          </StyledBookImageWrapper>
        </StyledBookCardInfo>
        <StyledBookCardInfo>
          <div>
            <StyledBookTitle>{title}</StyledBookTitle>
            {authors &&
              authors
                .slice(0, 1)
                .map((author) => <p key={author}>by {author}</p>)}
          </div>
          <StyledBookChapterText>
            <ChapterIcon />
            Chapter&nbsp;<span>2</span>&nbsp;From 9
          </StyledBookChapterText>
        </StyledBookCardInfo>
      </StyledBookCard>
    </Link>
  )
}

export default FeaturedBookCard
