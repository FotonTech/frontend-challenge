import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: inline-block;
  width: 90%;
  height: ${({ theme }) => theme.spacing(13)}px;
  background-image: url('https://i.imgur.com/1FB5LrR.png');
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  margin-right: ${({ theme }) => theme.spacing(2)}px;
  padding: ${({ theme }) => theme.spacing(0, 2)};
  text-decoration: none;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const StyledImg = styled.img`
  height: ${({ theme }) => theme.spacing(18)}px;
  top: -20%;
  position: relative;
`;

export const InfoContainer = styled.div`
  display: flex;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(1.5)}px;
  flex-direction: column;
`;

export const StyledTitle = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
  color: #2a2b26;
  font-size: 25px;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
`;

export const StyledSubTitle = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  color: #74776d;
  font-size: 11px;
  font-family: 'Roboto', sans-serif;
  margin-top: ${({ theme }) => theme.spacing(0.5)}px;
`;

export const ChapterTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing(2.5)}px;
  align-items: center;
`;

export const StyledChapterText = styled.span`
  font-size: 11px;
`;
