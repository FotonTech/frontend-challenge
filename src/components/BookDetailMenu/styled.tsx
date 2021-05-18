import { Container as ContainerBS } from 'reactstrap';
import styled from 'styled-components';

export const Container = styled(ContainerBS)``;

export const GroupIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  border-radius: 2px;
  margin-bottom: 53px;
  padding-top: 20px;
  padding-right: 23px;
  padding-left: 23px;
  padding-bottom: 19px;
`;

export const Icon = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0.4px;
  color: #3f4043;

  svg {
    margin-right: 9px;
  }
`;

export const Border = styled.div`
  width: 1px;
  height: 16px;
  background-color: rgba(151, 151, 151, 0.2);
`;
