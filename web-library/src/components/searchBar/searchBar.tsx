import styled from "styled-components"
import { assetsAltTexts, assetsPaths } from "../../constants/assetsPaths"
import { getAssetsUrl } from "../../utils/getAssetsUrl"

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
  -webkit-appearance: none;
  border: none;
  flex: 1;
  font-size: 16px;
  :focus {
    outline: none;
  }
`

const SearchBar = () => {
  return (
    <Wrapper>
      <SearchIcon src={getAssetsUrl(assetsPaths.searchIcon)} alt={assetsAltTexts.searchIcon} />
      <SearchInput placeholder={'Search book'} />
    </Wrapper>
  )
}

export default SearchBar
