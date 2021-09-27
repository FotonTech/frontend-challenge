import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import { Box, Button, Flex, SimpleGrid, Text, Heading } from '@chakra-ui/react'
import { searchBook } from '../../../services/books'
import { Wrapper } from '../../../components/Wrapper'
import { SearchBox } from '../../../components/SearchBox'

const MotionBox = motion(Box)

export default function SearchBook({ books }) {
  const router = useRouter()
  const [bookResults, setBookResults] = useState(books)
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadMore = async () => {
    setIsLoading(true)

    const queryParams = {
      q: router.query,
      maxResults: 40
    }

    const res = await searchBook(queryParams)

    const newResults = [...bookResults, ...res]
    setBookResults(newResults)
    setIsLoading(false)
  }

  return (
    <Wrapper title='Search | FotonChallenge'>
      <Box m='0 20px'>
        <SearchBox />
        <button onClick={handleLoadMore}>teste</button>
        <SimpleGrid my='40px' columns={[3, 4]} spacingX={[5, 40]} spacingY='50px'>
          {bookResults.map(book => {
            const { id, etag, volumeInfo: { authors, title, imageLinks: { thumbnail } } } = book
            return (
              <Link key={etag} href={`/book/${id}`} passHref>
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
        <Flex justify='center' mb={20}>
          <Button
            onClick={handleLoadMore}
            color="highlight"
            variant="link"
            fontSize='20px'
            isLoading={isLoading}
            isLoadingText='Loading'
          >
            Load More
          </Button>
        </Flex>
      </Box>
    </Wrapper>
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
