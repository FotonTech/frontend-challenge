import React from 'react'
import styled from 'styled-components'
import { assetsAltTexts, mocksAssetsPaths } from '../../../constants/assetsPaths'
import { getAssetsUrl } from '../../../utils/getAssetsUrl'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bolder;
`

const BookImage = styled.img`
  width: 100px;
  height: 150px;
  filter: drop-shadow(0px 2px 4px rgba(229, 229, 229, 0.5));
`

const Title = styled.div`
  margin-top: 9px;
  font-size: 12px;
`

const AuthorName = styled.div`
  margin: 5px 0 12px 0;
  font-size: 10px;
`

const Book = () => {
  return (
    <Wrapper>
      <BookImage src={getAssetsUrl(mocksAssetsPaths.bookCoverSearchPage)} alt={assetsAltTexts.bookCover('mock')} />
      <Title>
      The One Thing
      </Title>
      <AuthorName>
      by Gary Keller
      </AuthorName>
    </Wrapper>
  )
}

export default Book
