import React from 'react'
import styled from 'styled-components'
import { assetsAltTexts, assetsPaths, mocksAssetsPaths } from '../../../../constants/assetsPaths'
import { getAssetsUrl } from '../../../../utils/getAssetsUrl'

const Wrapper = styled.div`
  height: 100px;
  min-width: 300px;
  padding: 0 19px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 45px rgba(121, 141, 67, 0.115084);
  border-radius: 0px 3px 3px 0px;
  margin-left: -20px;
  background-color: #EEF5DB;
`

const BookInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`

const BookTitle = styled.span`
  margin-top: 10px;
  font-size: 20px;
`

const AuthorName = styled.span`
  margin-top: 5px;
  font-size: 10px;
`

const BookStats = styled.div`
  margin-top: 22px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  font-size: 10px;
  font-weight: bolder;
`

const MediaContainer = styled.div`
  height: 135px;
`

const BookImage = styled.img`
  width: 90px;
  height: inherit;
  object-fit: contain;
`

const CurrentReadBookCard: React.FC = () => {
  return (
    <Wrapper>
      <MediaContainer>
        <BookImage src={getAssetsUrl(mocksAssetsPaths.currentReadBookMedia)} alt={assetsAltTexts.bookCover('mock')} />
      </MediaContainer>

      <BookInfoWrapper>
        <BookTitle>Originals</BookTitle>
        <AuthorName>by Adam Grant</AuthorName>
        <BookStats>
          <img src={getAssetsUrl(assetsPaths.bookmarkedIcon)} alt={assetsAltTexts.bookmarkedIcon} />
          <span>
            Chapter&nbsp;{/* Blank space */}
          </span>
          <span>
            2
          </span>
          <span>
            &nbsp;{/* Blank space */}From 9
          </span>
        </BookStats>
      </BookInfoWrapper>
    </Wrapper>
  )
}

export default CurrentReadBookCard
