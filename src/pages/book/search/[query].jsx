import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"
import { Box, Flex, SimpleGrid, Text, Heading } from '@chakra-ui/react'
import { searchBook } from '../../../services/books'
import { Master } from '../../../components/Master'
import { SearchBox } from '../../../components/SearchBox'

const MotionBox = motion(Box)

export default function SearchBook({ books }) {
  return (
    <Master title='Search | FotonChallenge'>
      <Box m='0 20px'>
        <SearchBox />

        <SimpleGrid my='40px' columns={[3, 4]} spacingX={[5, 40]} spacingY='50px'>
          {books.map(book => {
            const { id, volumeInfo: { authors, title, imageLinks: { thumbnail } } } = book
            return (
              <Link key={id} href={`/book/${id}`} passHref>
                <MotionBox
                  as='a'
                  key={id}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: .5 } }}
                >
                  <Image
                    width={153}
                    height={229}
                    display='block'
                    alt={title}
                    src={thumbnail}
                  />
                  <Flex flexDir='column' maxWidth={80} color='text.700' fontWeight='bold'>
                    <Heading fontSize='12px' lineHeight='14px' isTruncated mb='5px'>{title}</Heading>
                    <Text fontSize='10px' lineHeight='14px'>
                      <Box as='span'>by &nbsp;</Box>
                      {authors.slice(0, 3).map((author, i) => (
                      <Box as='span' key={author}>
                        {author}
                        {authors.length > i + 1 && i !== 2 ? ', ' : i === 2 ? '...' : null}
                      </Box>
                    ))}</Text>
                  </Flex>
                </MotionBox>
              </Link>
            )
          })}
        </SimpleGrid>
      </Box>

      <h1>oi</h1>
    </Master>
  )
}


export async function getServerSideProps(ctx) {
  const { query: { query } } = ctx

  const queryParams = {
    q: query,
    maxResults: 40
  }

  const books = await searchBook(queryParams)
  return {
    props: {
      books
    }
  }
}
