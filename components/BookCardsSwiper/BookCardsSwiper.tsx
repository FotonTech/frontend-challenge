import React, { useState } from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import Image from "next/image"

import { Book } from "@/types/books"
import { StatisticsIcon } from "@/components/Icons"

const StyledBookCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledBookCard = styled.a<{ index: number; swiperIndex: number }>(
  ({ index, swiperIndex }) => {
    const isCurrentIndex = index === swiperIndex

    return `
      display: inline-flex;
      padding: 15px 20px 20px 20px;
      margin-right: 10px;
      justify-content: space-between;
      min-width: ${isCurrentIndex ? "272px" : "250px"};
      max-width: ${isCurrentIndex ? "272px" : "250px"};
      height: ${isCurrentIndex ? "139px" : "128px"};
      transition: all .1s linear;
    
      background: ${isCurrentIndex ? "#00173d" : "#451475"};
      border-radius: 5px;
    
      color: #e7e7e1;
      cursor: pointer;
    
      background-image: url("/images/book-background-oval.png");
      background-position: 0 100%;
      background-repeat: no-repeat;
    
      img {
        height: ${isCurrentIndex ? "111px" : "100px"};
        transition: height .1s linear;
        border-radius: 5px;
      }
    `
  }
)

const StyledBookTitle = styled.h3`
  margin-bottom: 4px;
  max-width: 120px;
  margin-top: 2px;
  line-height: 36px;

  font-family: PlayfairDisplay;
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  letter-spacing: 2px;

  white-space: nowrap;
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
  align-items: center;
  font-family: SFProDisplay;
  font-style: normal;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.020635px;
  vertical-align: middle;

  span {
    font-weight: bold;
  }
`

const StyledStatisticsIcon = styled(StatisticsIcon)`
  margin-right: 4px;
`

const StyledWrapper = styled.div`
  min-height: 139px;

  .swiper-wrapper {
    align-items: center;
  }
`

type Props = {
  books: Book[]
  isActive?: boolean
}

const BookCard = (props: Props) => {
  const { books } = props
  const [swiperIndex, setSwiperIndex] = useState(0)

  if (!books) return null

  return (
    <StyledWrapper>
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 3
          }
        }}
        slidesPerView={1.25}
        onTransitionEnd={(data) => setSwiperIndex(data.realIndex)}
      >
        {books &&
          books.map((book, index) => {
            const {
              id,
              etag,
              volumeInfo: {
                authors,
                imageLinks: { thumbnail },
                title
              }
            } = book
            return (
              <SwiperSlide key={etag}>
                <Link href={`/book/${id}`} passHref>
                  <StyledBookCard index={index} swiperIndex={swiperIndex}>
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
                        <span>120+</span>&nbsp;Read Now
                      </StyledReadNowText>
                    </StyledBookCardInfo>
                    <StyledBookCardInfo>
                      <Image
                        width={72}
                        height={111}
                        alt={title}
                        src={thumbnail}
                      />
                    </StyledBookCardInfo>
                  </StyledBookCard>
                </Link>
              </SwiperSlide>
            )
          })}
      </Swiper>
    </StyledWrapper>
  )
}

export default BookCard
