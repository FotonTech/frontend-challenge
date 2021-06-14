import { useContext } from "react"
import { ChangeEvent, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { assetsAltTexts, assetsPaths } from "../../constants/assetsPaths"
import { routes } from "../../constants/routes"
import { GlobalStateContext } from "../../global/globalState"
import { goToPage } from "../../router/routerCoordinator"
import { getAssetsUrl } from "../../utils/getAssetsUrl"
import { getBooksBySearch } from "../../utils/getBooksBySearch"

const Wrapper = styled.div`
  max-width: 100%;
  height: 48px;
  margin: 50px 20px 30px 20px;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
  border-radius: 10px;
  background: #FDFCFC;
  display: flex;
  align-items: center;
`

const SearchIcon = styled.img`
  margin: 0 10px 0 15px;
`

const SearchInput = styled.input`
  background: #FDFCFC;
  -webkit-appearance: none;
  border: none;
  flex: 1;
  font-size: 16px;
  :focus {
    outline: none;
  }
`

const SearchBar = () => {
  const history = useHistory()
  const currentUrl = history.location.pathname
  const isSearchPage = checkIfIsSearchPage(currentUrl)
  const { setSearchResult } = useContext(GlobalStateContext)

  const [searchQuery, setSearchQuery] = useState<string>(getBaseSearchValue(currentUrl))

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchAction = () => {
    getBooksBySearch(searchQuery).then(result => {
      setSearchResult(result)
    })
    if(!isSearchPage) {
      goToPage(history, routes.searchBook(searchQuery)) 
    }
  }

  return (
    <Wrapper>
      <SearchIcon onClick={handleSearchAction} src={getAssetsUrl(assetsPaths.searchIcon)} alt={assetsAltTexts.searchIcon} />
      <SearchInput onChange={handleOnChange} value={searchQuery} placeholder={'Search book'} />
    </Wrapper>
  )
}

const checkIfIsSearchPage = (url: string) => {
  return url.includes('searchBooks')
}

const getBaseSearchValue = (url: string) => {
  if (!checkIfIsSearchPage(url)) return ''
  return url.split(':')[1]
  
}


export default SearchBar
