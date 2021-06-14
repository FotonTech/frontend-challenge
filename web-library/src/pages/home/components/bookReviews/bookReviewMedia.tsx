import React from 'react'
import styled from 'styled-components'
import { assetsAltTexts, mocksAssetsPaths } from '../../../../constants/assetsPaths'
import { getAssetsUrl } from '../../../../utils/getAssetsUrl'

const Wrapper = styled.div`
  margin-top: 15px;
  height: 180px;
  border-radius: 5px;
`

const BookImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  border-radius: 5px;
`

const BookReviewMedia: React.FC = () => {
  return (
    <Wrapper>
      <BookImage src={getAssetsUrl(mocksAssetsPaths.reviewOfTheDayFiller)} alt={assetsAltTexts.bookCover('mock')} />
    </Wrapper>
  )
}

export default BookReviewMedia

