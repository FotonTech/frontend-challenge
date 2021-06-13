import React, { useMemo } from 'react';
import { LinkProps, useLocation } from 'react-router-dom';
// eslint-disable-next-line
import { StyledLink } from './styles';

export interface MenuItemProps extends LinkProps {
  $active?: boolean;
  to: string;
  exact?: boolean;
}
// eslint-disable-next-line
const MenuItem: React.FC<MenuItemProps> = ({ to, children, exact }) => {
  const location = useLocation();

  const isActive = useMemo(() => {
    if (exact) return location.pathname === to;
    return location.pathname.startsWith(to);
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <StyledLink to={to} $active={isActive}>
      {children}
    </StyledLink>
  );
};

export default MenuItem;
