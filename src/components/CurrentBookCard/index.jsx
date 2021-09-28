import Image from 'next/image'
import NextLink from 'next/link'
import { Flex, Text, Box } from '@chakra-ui/react'
import { CurrentlyReadingIcon } from '../Icons'

export const CurrentBookCard = ({ book }) => {
  const { id, etag, volumeInfo: { authors, title, imageLinks: { thumbnail } } } = book
  return (
    <NextLink href='#' passHref>
      <Flex
        as='a'
        position='relative'
        p='10px 20px 10px 20px'
        mt='20px'
        maxWidth='330px'
        maxHeight='100px'
        background='#eef5db'
        boxShadow='0px 3px 45px rgba(121, 141, 67, 0.115084)'
        borderRadius='0px 3px 3px 0px'
        cursor='pointer'
        sx={{ gap: '8px' }}
      >

        <Flex flexDir='column' justify='space-between' mr='10px'>
          <Box m='-25px 0' maxHeight='130px'>
            <Image
              width={88}
              height={130}
              src={thumbnail}
            />
          </Box>
        </Flex>

        <Flex flexDir='column' justify='space-between' flex='1'>
          <Box>
            <Text as='h3' fontWeight='700' fontSize='20px' lineHeight='26px' color='title.700'>{title}</Text>
            {authors && authors.slice(0, 1).map(author => (
              <Text
                key={author}
                fontSize='10px'
                color='text.800'
              >
                by {author}
              </Text>
            ))}
          </Box>

          <Flex align='center' color='title.700'>
            <CurrentlyReadingIcon boxSize='16px' position='relative' top='2px' />
            <Text>
              Chapter&nbsp;
              <Text as='span' color='highlight'>2&nbsp;</Text>
              From 9
            </Text>
          </Flex>
        </Flex>

        <Flex
          flexDir='column'
          justify='space-between'
          position='absolute'
          top='0'
          right='0'
          width='100%'
          height='100px'
          overflow='hidden'
        >
          <Box position='absolute' top='-20px' right='-33px' zIndex='1'>
            <Image
              width={142}
              height={157}
              src='/images/currently-reading.png'
            />
          </Box>
        </Flex>

      </Flex>
    </NextLink>
  )
}
