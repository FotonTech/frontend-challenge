import React from 'react';
import {
  CardContainer,
  RightCardSide,
  LeftCardSide,
  CardContent,
  TitleContainer,
  IconContainer,
  BookPicture,
  StyledTitle,
  IconText,
  StyledSubTitle,
  GeometricImage,
} from '../styles';
import { BooksModel } from '../../../hooks/utils';
import { ReactComponent as DiscoverIcon } from '../../../assets/images/discover-icon.svg';
import geometricImage from '../../../assets/images/geometric.png';

interface Props {
  item: BooksModel;
}

const Card: React.FC<Props> = ({ item }) => {
  return (
    <CardContainer>
      <CardContent>
        <LeftCardSide>
          <TitleContainer>
            <StyledTitle>{item.volumeInfo.title}</StyledTitle>
            <StyledSubTitle>{item.volumeInfo.authors[0]}</StyledSubTitle>
          </TitleContainer>
          <IconContainer>
            <DiscoverIcon />
            <IconText>{item.volumeInfo.pageCount}+ Read Now</IconText>
          </IconContainer>
        </LeftCardSide>
        <RightCardSide>
          <GeometricImage
            // eslint-disable-next-line
            src={geometricImage}
          />
          <BookPicture src={item.volumeInfo.imageLinks.smallThumbnail} />
        </RightCardSide>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
