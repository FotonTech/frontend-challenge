import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { Navigation } from '../Navigation'


export const Wrapper = ({ title, children, isBookDetailsPage }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box maxWidth={960} m='0 auto'>
        {children}
        <Navigation isBookDetailsPage={isBookDetailsPage} />
      </Box>
    </>
  )
}
