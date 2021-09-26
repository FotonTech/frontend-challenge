import Image from 'next/image'
import { Text, Box } from '@chakra-ui/react'
import { Wrapper } from '../components/Wrapper'
import { SearchBox } from '../components/SearchBox'
import { CardSwiper } from '../components/CardSwiper'
import { CurrentBookCard } from '../components/CurrentBookCard'
import { Heading } from '../components/SectionHeading'
import { getDefaultBooks } from '../services/books'


export default function Home({ homeBooks, currentlyReading }) {
  return (
    <Wrapper title='Home | FotonChallenge'>
      <Box margin='0 20px'>
        <SearchBox />

        <Box display='flex' fontSize='24px' my='30px'>
          <Text color='text.500'>Hi,&nbsp;</Text>
          <Text fontWeight='bold' color='highlight'>Mehmed Al Fatih 👋🏻</Text>
        </Box>

        <Heading header='Discover new books' subheader='More' link='/book/search/new books' />

        <CardSwiper books={homeBooks} />

        <Heading header='Currently Reading' subheader='All' />
      </Box>

      <CurrentBookCard book={currentlyReading} />

      <Box margin='0 20px'>
        <Heading header='Reviews of the Days' subheader='All Video' />

        <Box borderRadius='5px 5px 0 0' height='250px'>
          <Image
            width={335}
            height={188}
            layout='responsive'
            alt='Review of the day'
            src='/images/review-of-the-day.jpg'
          />
        </Box>
      </Box>
    </Wrapper>
  )
}

export const getStaticProps = async () => {
  const books = await getDefaultBooks()

  const homeBooks = [
    books.res1.data.items[0],
    books.res2.data.items[2],
    books.res3.data.items[0],
    books.res4.data.items[0],
    books.res5.data.items[0],
  ]

  const currentlyReading = books.res6.data.items[0]

  return {
    props: {
      homeBooks,
      currentlyReading
    },
    revalidate: 60 * 60 * 24
  }
}
