import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(3, 3)};
  background-color: #fefbf8; /* For browsers that do not support gradients */
  background-image: linear-gradient(#fffcf9, #fff);
`;
