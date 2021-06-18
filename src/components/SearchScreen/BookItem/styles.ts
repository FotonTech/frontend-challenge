import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 33%;
  min-height: ${({ theme }) => theme.spacing(10)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(5)}px;
  overflow: hidden;
  text-decoration: none;
  word-break: keep-all;
`;

export const StyledImage = styled.img`
  max-width: 200px;
  max-height: 250px;
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  box-shadow: 2px 2px 5px #00000015;
  @media (max-width: 600px) {
    width: 95%;
    height: 140px;
  }
`;

export const StyledText = styled.span`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.secondary.dark};
  margin-top: 10px;
`;
