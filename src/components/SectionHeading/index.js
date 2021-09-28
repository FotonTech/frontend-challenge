import Link from 'next/link'
import { Flex, Text } from '@chakra-ui/react'

export const Heading = ({ header, subheader, link }) => {
  return (
    <Link href={ link ? link : '#'}>
      <Flex as='a' justify='space-between' align='center' m='30px 0 16px'>
        <Text color='text.600' fontSize='18px'>{header}</Text>
        <Text as='span' color='link' fontSize='14px'>{subheader}</Text>
      </Flex>
    </Link>
  )
}
