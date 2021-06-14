import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

export const Container = styled.div`
  width: 90%;
  height: ${({ theme }) => theme.spacing(6)}px;
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  align-self: center;
  margin-top: ${({ theme }) => theme.spacing(5)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(0, 1)};
`;

export const StyledSearchIcon = styled(SearchIcon)`
  -webkit-transform: matrix(-1, 0, 0, 1, 0, 0);
  -moz-transform: matrix(-1, 0, 0, 1, 0, 0);
  -o-transform: matrix(-1, 0, 0, 1, 0, 0);
  transform: matrix(-1, 0, 0, 1, 0, 0);
  color: ${({ theme }) => theme.palette.secondary.light};
`;

export const StyledInput = styled.input`
  width: 80%;
  height: 50%;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.palette.secondary.dark};
  font-size: ${({ theme }) => theme.spacing(2)}px;
  margin-left: ${({ theme }) => theme.spacing(1)}px;
`;
