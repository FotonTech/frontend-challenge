import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(1)}px;
  height: ${({ theme }) => theme.spacing(7)}px;
  background-color: ${({ theme }) => theme.palette.primary.light};
  justify-content: space-around;
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
