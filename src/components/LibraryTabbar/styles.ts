import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;
  background-color: #fffcf9;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  background-color: #fff6e5;
  height: 250px;
  border-bottom-right-radius: 25%;
  @media (max-width: 600px) {
    background-image: url('https://i.imgur.com/4S4qkMy.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  margin-bottom: 64px;
  flex-direction: column;
`;

export const StyledThumbnail = styled.img`
  width: 150px;
  position: relative;
  bottom: -60px;
  align-self: center;
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  box-shadow: 2px 2px 10px #00000015;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  padding: 0 16px;
  flex-direction: column;
`;

export const StyledTitle = styled.span`
  font-size: ${({ theme }) => theme.spacing(3)}px;
  font-weight: bold;
`;

export const StyledSubTitle = styled.span`
  font-size: ${({ theme }) => theme.spacing(2)}px;
  color: #ff6978;
  font-weight: bold;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`;

export const BackContainer = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spacing(7)}px;
  display: flex;
  align-items: flex-end;
  position: fixed;
`;

export const StyledButton = styled.button`
  margin-left: ${({ theme }) => theme.spacing(3)}px;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const StyledText = styled.span`
  font-size: ${({ theme }) => theme.spacing(2)}px;
  color: #31313160;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

export const StyledTabbar = styled.div`
  width: 80%;
  max-width: 500px;
  height: 64px;
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: 2px 2px 10px #00000015;
  border-radius: ${({ theme }) => theme.spacing(0.5)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TabbarItem = styled.button`
  height: 100%;
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.secondary.dark};
  flex-direction: row;
  background-color: transparent;
  border: none;
  :hover {
    background-color: #f7f7f7;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 33%;
  background-color: #eaeaea;
`;

export const TabbarContainer = styled.div`
  bottom: 20px;
  position: fixed;
  width: 100%;
  height: 64px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const ItemText = styled.span`
  margin-left: 6px;
  font-weight: bold;
  font-size: 14px;
`;
