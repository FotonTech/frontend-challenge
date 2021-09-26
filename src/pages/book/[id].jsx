import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"
import { Flex, Box, Text, Heading, useBreakpointValue } from '@chakra-ui/react'
import { Wrapper } from '../../components/Wrapper'
import { getDefaultBooks, getBook } from '../../services/books'
import { ReturnIcon } from '../../components/Icons'

const MotionBox = motion(Box)

export default function BookDetails({ book }) {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true
  })

  const { volumeInfo: { authors, title, subtitle, description, imageLinks: { thumbnail } } } = book

  return (
    <Wrapper title={`${title} | FotonChallenge`} isBookDetailsPage>

      <Flex flexDir='column'>
        <Flex
          backgroundImage={isDesktop ?
            "url('/images/book-background-desktop.png')" : "url('/images/book-background.png')"
          }
          backgroundRepeat='no-repeat'
          backgroundPosition='top'
          align='center'
          flexDir='column'
        >
          <Link href='/'>
            <MotionBox
              as='a'
              alignSelf='flex-start'
							whileTap={{scale: 1.05}}
            >
              <ReturnIcon top='55px' left='33px' boxSize='20px' />
            </MotionBox>
          </Link>

          <MotionBox
            initial={{opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { ease: 'easeIn', duration: .6 }}}
            pt='60px'
          >
            <Image
              width={153}
              height={229}
              display='block'
              alt={title}
              src={thumbnail}
            />
          </MotionBox>
        </Flex>
      </Flex>

      <Box m='36px 20px 0'>
        <Heading as='h3' fontSize='24px' fontWeight='bold' color='black' display='inline-flex'>
          <Text color='title.500'>
            <Box as='span' color='black'>
              {title}:&nbsp;
            </Box>
            {subtitle}
          </Text>
        </Heading>
        <Text color='highlight' mt='7px' mb='10px'>{authors}</Text>
      </Box>

      <Box
        m='0 20px 20px'
        color='text.700'
        fontSize='14px'
        lineHeight='25px'
        letterSpacing='0.2px'
        dangerouslySetInnerHTML={{
          __html: description
        }}
      />

    </Wrapper>
  )
}

export async function getStaticPaths() {
  const books = await getDefaultBooks()

  const response = [
    books.res1.data.items[0],
    books.res2.data.items[2],
    books.res3.data.items[0],
    books.res4.data.items[0],
    books.res5.data.items[0],
    books.res6.data.items[0],
  ]

  const paths = response.map(book => {
    return {
      params: {
        id: book.id
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const { id } = params

  const { data } = await getBook(id)

  return {
    props: {
      book: data
    }
  }
}
