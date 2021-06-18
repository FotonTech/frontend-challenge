import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0px;
  width: 100vw;
  height: ${({ theme }) => theme.spacing(7)}px;
  padding: ${({ theme }) => theme.spacing(1, 0)};
  background-color: ${({ theme }) => theme.palette.common.white};
`;

export const ItemContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledTypography = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  font-size: ${({ theme }) => theme.spacing(2)}px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  flex: 1;
  font-size: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.secondary.main};
`;
