import { InputGroup as InputGroupStyled } from 'reactstrap';
import styled from 'styled-components';
import { ReactComponent as SearchIconSvg } from '../../images/search-icon.svg';

type SvgIconType = {
  size: string;
};

export const InputGroup = styled(InputGroupStyled)`
  border-radius: 10px;
  margin-bottom: 30px;

  .input-group-text,
  .form-control {
    background-color: white;
    border: 1px solid white;
    border-radius: 10px;
  }

  .input-group-text {
    color: transparent;
    padding: 6px 9px 6px 14px;
  }

  .form-control {
    font-family: 'SF Pro Text', sans-serif;
    height: 48px;
    padding-left: 0;
    &::placeholder {
      color: #54565a;
    }
  }
`;

export const SearchIcon = styled(SearchIconSvg)`
  width: ${({ size }: SvgIconType) => size};
  height: ${({ size }: SvgIconType) => size};
`;
