import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(0, 1)};
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;
`;
