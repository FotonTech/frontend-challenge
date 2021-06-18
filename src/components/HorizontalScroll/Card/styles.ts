import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled(Link)`
  display: inline-block;
  width: ${({ theme }) => theme.spacing(31)}px;
  height: ${({ theme }) => theme.spacing(17)}px;
  background-image: url('https://i.imgur.com/WvNopaC.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  margin-right: ${({ theme }) => theme.spacing(2)}px;
  padding: ${({ theme }) => theme.spacing(0, 2)};
  flex-direction: column;
  text-decoration: none;

  :nth-child(even) {
    background-image: url('https://i.imgur.com/QMRoHmy.png');
  }
  :first-child {
    margin-left: 5%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const LeftCardSide = styled.div`
  width: 50%;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const StyledTitle = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
  font-size: ${({ theme }) => theme.spacing(3.5)}px;
  font-family: 'Playfair Display';
  font-weight: 700;
`;

export const StyledSubTitle = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@1,200&display=swap');
  font-family: 'Spectral', serif;
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconText = styled.span`
  font-size: ${({ theme }) => theme.spacing(1.2)}px;
  color: white;
  margin-left: ${({ theme }) => theme.spacing(0.5)}px;
`;

export const RightCardSide = styled.div`
  width: 40%;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BookPicture = styled.img`
  height: 80%;
  width: 80%;
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  z-index: 1;
`;

export const GeometricImage = styled.img`
  z-index: 2;
  position: relative;
  right: -25px;
  align-self: flex-start;
`;
