import React from 'react'
import styled from 'styled-components'
import { assetsAltTexts, mocksAssetsPaths } from '../../../../constants/assetsPaths'
import { getAssetsUrl } from '../../../../utils/getAssetsUrl'
import { CircleWave4 } from '../fillers/fillers'

const Wrapper = styled.div`
  margin-top: 15px;
  height: 180px;
  border-radius: 5px;
  position: relative;
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
      <CircleWave4 />
      <BookImage src={getAssetsUrl(mocksAssetsPaths.reviewOfTheDayFiller)} alt={assetsAltTexts.bookCover('mock')} />
    </Wrapper>
  )
}

export default BookReviewMedia

