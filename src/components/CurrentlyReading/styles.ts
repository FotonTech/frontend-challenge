import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const Container = styled.div`
  width: 100%;
  align-self: center;
  margin-top: ${({ theme }) => theme.spacing(3)}px;
`;

export const StyledTypography = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(3)}px;
  margin-left: 5%;
  color: ${({ theme }) => theme.palette.secondary.dark};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledLinkButton = styled.a`
  color: ${({ theme }) => theme.palette.primary.main};
  margin-right: 5%;
  font-weight: lighter;
`;

export const Card = styled.div`
  display: inline-block;
  width: 90%;
  height: ${({ theme }) => theme.spacing(13)}px;
  background-image: url('https://i.imgur.com/1FB5LrR.png');
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  margin-right: ${({ theme }) => theme.spacing(2)}px;
`;
