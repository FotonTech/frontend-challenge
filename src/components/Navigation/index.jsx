import Link from 'next/link'
import { useRouter } from 'next/router'
import { Flex, Text } from '@chakra-ui/react'
import { HomeIcon, LibraryIcon, ProfileIcon, ReadIcon, ListenIcon, ShareIcon } from '../Icons'

export const Navigation = ({ isBookDetailsPage }) => {
  const router = useRouter()
  const currentPath = router.pathname
  return (
    <Flex
      as='nav'
      position='fixed'
      maxWidth={isBookDetailsPage ? '335px' : '920px'}
      m='0 auto'
      p={isBookDetailsPage ? '20px' : '10px 0'}
      bottom={isBookDetailsPage ? '53px' : '0'}
      left='0'
      right='0'
      borderTop='1px solid rgba(151, 151, 151, 0.2)'
      boxShadow='3px 3px 23px rgba(107, 103, 70, 0.125901)'
      bg='white'
      justify='space-around'
      boxShadow={isBookDetailsPage && '3px 3px 23px rgba(107, 103, 70, 0.125901)'}
    >
      <Link href='/'>
        <Flex as='a' flexDir={isBookDetailsPage ? 'row' : 'column'} align='center' sx={{ gap: '10px' }}>
          {isBookDetailsPage
            ? (<ReadIcon top='3px' color='transparent' boxSize='20px' />)
            : (<HomeIcon left='2px' boxSize='20px' color='transparent' stroke={currentPath === '/' && 'black'} />)
          }
          <Text
            color={currentPath === '/' && 'black'}
            fontSize={isBookDetailsPage ? '14px' : '10px'}
            fontWeight={isBookDetailsPage && 'bold'}
            color={isBookDetailsPage && '#3F4043'}
          >
            {isBookDetailsPage ? 'Read' : 'Home'}
          </Text>
        </Flex>
      </Link>

      <Link href='/book/search/new books'>
        <Flex as='a' flexDir={isBookDetailsPage ? 'row' : 'column'} align='center' sx={{ gap: '10px' }}>
          {isBookDetailsPage
            ? (<ListenIcon top='2px' color='transparent' boxSize='20px' />)
            : (<LibraryIcon left='3px' top='0' boxSize='20px' color='transparent' stroke={currentPath.includes('search') && 'black'} />)
          }
          <Text
            color={currentPath.includes('search') && 'black'}
            fontSize={isBookDetailsPage ? '14px' : '10px'}
            fontWeight={isBookDetailsPage && 'bold'}
            color={isBookDetailsPage && '#3F4043'}
          >
            {isBookDetailsPage ? 'Listen' : 'Libraries'}
          </Text>
        </Flex>
      </Link>

      <Flex flexDir={isBookDetailsPage ? 'row' : 'column'} align='center' sx={{ gap: '10px' }}>
        {isBookDetailsPage
          ? (<ShareIcon top='2px' boxSize='20px' color='transparent' />)
          : (<ProfileIcon color='transparent' left='3px' top='0' boxSize='20px' />)
        }
        <Text
          fontSize={isBookDetailsPage ? '14px' : '10px'}
          fontWeight={isBookDetailsPage && 'bold'}
          color={isBookDetailsPage && '#3F4043'}
        >
          {isBookDetailsPage ? 'Share' : 'Profile'}
        </Text>
      </Flex>
    </Flex>
  )
}
