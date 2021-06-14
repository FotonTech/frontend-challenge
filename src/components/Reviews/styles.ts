import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const Container = styled.div`
  width: 100%;
  align-self: center;
  margin-top: ${({ theme }) => theme.spacing(3)}px;
  display: flex;
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

export const StyledImage = styled.img`
  width: auto;
  max-width: 90%;
  height: ${({ theme }) => theme.spacing(25)}px;
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  object-fit: contain;
  margin: 0 5%;
`;
