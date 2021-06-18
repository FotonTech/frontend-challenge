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
} from './styles';
import { BooksModel } from '../../../hooks/utils';
import { ReactComponent as DiscoverIcon } from '../../../assets/images/discover-icon.svg';
import geometricImage from '../../../assets/images/geometric.png';
import img from '../../../assets/images/not-found.png';

interface Props {
  item: BooksModel;
  to: string;
}

const Card: React.FC<Props> = ({ item, to }) => {
  return (
    <CardContainer to={to}>
      <CardContent>
        <LeftCardSide>
          <TitleContainer>
            <StyledTitle>
              {item.volumeInfo.title ? item.volumeInfo.title : ''}
            </StyledTitle>
            <StyledSubTitle>
              {item.volumeInfo.authors
                ? item.volumeInfo.authors[0]
                : 'anonymous'}
            </StyledSubTitle>
          </TitleContainer>
          <IconContainer>
            <DiscoverIcon />
            <IconText>{item.volumeInfo.pageCount}+ Read Now</IconText>
          </IconContainer>
        </LeftCardSide>
        <RightCardSide>
          <GeometricImage src={geometricImage} />
          <BookPicture
            src={
              item.volumeInfo.imageLinks
                ? item.volumeInfo.imageLinks.smallThumbnail
                : img
            }
          />
        </RightCardSide>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
