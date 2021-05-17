import { Container as ContainerBS } from 'reactstrap';
import styled from 'styled-components';

export const Container = styled(ContainerBS)`
  background: #fff;

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 13px;
    font-size: 10px;
    line-height: 12px;
    padding-top: 10px;
    color: #313131;

    svg {
      margin-bottom: 9px;
    }
  }
`;
