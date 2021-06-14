import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Typography } from '@material-ui/core';

export const Container = styled(ScrollContainer)`
  width: 100%;
  align-self: center;
  white-space: nowrap;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

export const StyledTypography = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(3)}px;
  margin-left: 5%;
  color: ${({ theme }) => theme.palette.secondary.dark};
  font-weight: bold;
`;

export const FirstCard = styled.div`
  display: inline-block;
  width: ${({ theme }) => theme.spacing(31)}px;
  height: ${({ theme }) => theme.spacing(17)}px;
  background-image: url('https://i.imgur.com/WvNopaC.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  margin-right: ${({ theme }) => theme.spacing(2)}px;

  :nth-child(even) {
    background-image: url('https://i.imgur.com/QMRoHmy.png');
  }
  :first-child {
    margin-left: 5%;
  }
`;
