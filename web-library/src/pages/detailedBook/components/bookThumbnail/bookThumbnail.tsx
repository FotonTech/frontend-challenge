import React from 'react'
import styled from 'styled-components'
import { assetsAltTexts, mocksAssetsPaths } from '../../../../constants/assetsPaths'
import { getAssetsUrl } from '../../../../utils/getAssetsUrl'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 282px;
  background-color: #FEF6E5;
  border-radius: 0 0 100px 0;
`

const BookMedia = styled.img`
  width: 150px;
  height: 230px;
  margin-top: 84px;
`

const BookThumbnail: React.FC = () => {
  return (
    <Wrapper>
      <BookMedia src={getAssetsUrl(mocksAssetsPaths.detailedBookPage)} alt={assetsAltTexts.bookCover('mock')} />
    </Wrapper>
  )
}

export default BookThumbnail
