import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Input, Flex, Spinner } from '@chakra-ui/react'
import { useDebounce } from '../../hooks/useDebounce'
import { SearchIcon } from '../Icons'

export function SearchBox() {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = (event) => {
    setSearchValue(event.target.value)
  }

  const debouncedSearch = useDebounce(searchValue, 400)

  useEffect(() => {
    // if (debouncedSearch === '') {
    //   setSearchValue('')
    // }
    if (debouncedSearch) {
      router.push(`/book/search/${debouncedSearch}`)
      setTimeout(() => {
        setIsLoading(false)
      }, 300)
    }
  }, [debouncedSearch])

  useEffect(() => {
    if (searchValue !== '') {
      setIsLoading(true)
    }
  }, [searchValue])

  return(
    <Flex
      as='label'
      flex='1'
      maxWidth={[400, 960]}
      align='center'
      bgColor='white'
      p='16px'
      m='48px 0 0'
      borderRadius='10px'
    >
      <SearchIcon boxSize='20px' position='relative' top='3px' />
      <Input
        variant='unstyled'
        placeholder='Search book'
        _placeholder={{
          color: 'text.500'
        }}
        color='black'
        value={searchValue}
        onChange={handleSearch}
      />
      {isLoading && <Spinner color='highlight' />}
    </Flex>
  )
}
