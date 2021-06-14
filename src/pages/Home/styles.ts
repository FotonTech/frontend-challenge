import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;
  background-color: #fefbf8; /* For browsers that do not support gradients */
  background-image: linear-gradient(#fffcf9, #fff);
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing(5)}px;
  width: 90%;
  align-self: center;
  font-size: ${({ theme }) => theme.spacing(3)}px;
  color: ${({ theme }) => theme.palette.secondary.dark};
`;

export const NameText = styled.span`
  color: #fe6978;
  font-weight: bold;
  margin: ${({ theme }) => theme.spacing(0, 1)};
`;
