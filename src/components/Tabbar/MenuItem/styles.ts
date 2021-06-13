import styled from 'styled-components';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { MenuItemProps } from '.';

export const StyledLink = styled(Link)<MenuItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  flex: 1;
  font-size: 10px;
  text-decoration: none;
  color: ${({ $active, theme }) =>
    $active ? theme.palette.common.black : theme.palette.secondary.main};
`;
