import { Col as ColStyled } from 'reactstrap';
import styled from 'styled-components';

export const Col = styled(ColStyled)`
  margin: 0 -1px 7px;
  position: relative;
  z-index: 1;
`;

export const H5 = styled.h5`
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.8px;
  color: #3f4043;
`;

export const Link = styled.a`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0.9px;
  margin-top: 3px;
  color: #4abdf1;
`;

export const Children = styled.div`
  margin-bottom: 30px;
`;
