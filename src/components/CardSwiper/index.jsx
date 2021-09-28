import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/css";
import { motion } from "framer-motion"
import { Box, Text, Heading, Flex } from '@chakra-ui/react'
import { CardStatisticsIcon } from '../Icons'

SwiperCore.use([Pagination, Navigation]);
const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

export const CardSwiper = ({ books }) => {
  const [swiper, setSwiper] = useState(0)

  if (!books) {
    return null
  }

  return (
    <Flex minHeight='140px' sx={{ ".swiper-wrapper": { alignItems: "center" } }}>
      <Swiper
        breakpoints={{
          base: {
            slidesPerView: 1.25
          },
          800: {
            slidesPerView: 3
          }
        }}
        onTransitionEnd={(data) => setSwiper(data.realIndex)}
      >
        {books.map((book, i) => {
          const { id, volumeInfo: { authors, title, imageLinks: { thumbnail } } } = book
          const isActive = i === swiper

          return (
            <SwiperSlide key={id}>
              <Link href={`/book/${id}`} passHref>
                <MotionBox
                  as='a'
                  title={title}
                  display='flex'
                  mr='10px'
                  index={i}
                  swiper={swiper}
                  whileTap={{scale: .95}}
                >
                  <MotionFlex
                    height='128px'
                    width='250px'
                    bgColor={isActive ? '#00173d' : '#451475'}
                    p='16px 20px 20px'
                    borderRadius='8px'
                    cursor='pointer'
                    sx={{
                      backgroundImage: 'url("/images/discover-background.png")',
                      backgroundPosition: '0 100%',
                      backgroundRepeat: 'no-repeat',
                      img: { borderRadius: '8px' }
                    }}
                    animate={{
                      width: isActive ? '272px' : '250px',
                      height: isActive ? '140px' : '128px',
                      img: {
                        height: isActive ? '112px' : '110px'
                      },
                    }}
                    transition={{ ease: 'linear', duration: .1 }}
                  >

                      <Flex
                        flexDir='column'
                        display='inline-flex'
                        justify='space-between'
                        flex='1'
                      >
                        <Box>
                          <Heading
                            as='h3'
                            color='white.100'
                            fontWeight='bold'
                            fontSize='28px'
                            maxWidth={132}
                            mb='4px'
                            lineHeight='36px'
                            letterSpacing='2px'
                            isTruncated
                          >
                            {title}
                          </Heading>
                          {authors && authors.slice(0, 1).map(author => (
                            <Text
                              key={author}
                              fontSize='14px'
                              lineHeight='16px'
                              letterSpacing='1.3px'
                              color='white.300'
                            >
                              {author}
                            </Text>
                          ))}
                        </Box>

                        <Flex as='span' fontSize='10px' align='center' color='white.300'>
                          <CardStatisticsIcon boxSize='16px' position='relative' top='3px'/>
                          <Text color='white.secondary'>
                            <Text as='span' fontWeight='bold'>120+ </Text>
                            Read now
                          </Text>
                        </Flex>

                      </Flex>

                      <Flex flexDir='column' position='relative'>
                        <Box position='absolute' sx={{ left: '-36px', top: '-11px', }} zIndex='2'>
                          <Image
                            width={60}
                            height={100}
                            display='block'
                            src='/images/discover-foreground.png'
                          />
                        </Box>

                        <Image
                          width={72}
                          height={111}
                          display='block'
                          alt={title}
                          src={thumbnail}
                        />
                      </Flex>

                  </MotionFlex>
                </MotionBox>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Flex>
  )
}
