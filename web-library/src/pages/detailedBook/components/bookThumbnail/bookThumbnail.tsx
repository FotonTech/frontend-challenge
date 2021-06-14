import React from 'react'
import styled from 'styled-components'
import { assetsAltTexts } from '../../../../constants/assetsPaths'

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
  z-index: 1;
`

interface BookThumbnailProps {
  image?: string
  title?: string
}

const BookThumbnail: React.FC<BookThumbnailProps> = ({ image, title }) => {
  return (
    <Wrapper>
      <BookMedia src={image} alt={assetsAltTexts.bookCover(title || 'mock')} />
    </Wrapper>
  )
}

export default BookThumbnail
