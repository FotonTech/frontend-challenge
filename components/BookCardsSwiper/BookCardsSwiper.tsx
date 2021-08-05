import React, { useState } from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

import { Book } from "@/types/books"
import { StatisticsIcon } from "@/components/Icons"

const StyledBookCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledBookCard = styled.li<{ index: number; swiperIndex: number }>(
  ({ index, swiperIndex }) => `
  display: inline-flex;
  padding: 15px 20px 20px 20px;
  margin-right: 10px;
  justify-content: space-between;
  min-width: 280px;
  max-width: 280px;
  height: ${index === swiperIndex ? "139px" : "128px"};
  transition: all .1s linear;

  background: ${index === swiperIndex ? "#00173d" : "#451475"};
  border-radius: 5px;

  color: #e7e7e1;
  cursor: pointer;

  background-image: url("/images/book-background-oval.png");
  background-position: 0 100%;
  background-repeat: no-repeat;

  img {
    height: ${index === swiperIndex ? "111px" : "100px"};
    transition: height .1s linear;
  }
`
)

const StyledBookTitle = styled.h3`
  margin-bottom: 4px;
  max-width: 120px;
  line-height: 36px;

  font-family: Playfair Display;
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

const StyledImg = styled.img`
  max-height: 111px;
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
        slidesPerView={1.2}
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
                        120+ Read Now
                      </StyledReadNowText>
                    </StyledBookCardInfo>
                    <StyledBookCardInfo>
                      <StyledImg
                        alt={title}
                        src={thumbnail.replace("http", "https")}
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
