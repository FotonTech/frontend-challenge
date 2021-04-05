import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
`;

export const NavBar = styled.nav`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  padding: 8px 12px 0;
`;

export const NavTitleContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

export const NavTitleWrapper = styled.span`
  display: flex;
  width: auto;
  padding-bottom: 0.1rem;
  border-bottom: 0.1rem solid ${colors.text.secondary}66;
  text-transform: capitalize;
`;

export const BooksContainer = styled.div`
  display: grid;
  grid-auto-rows: 10rem;
  grid-gap: 12px;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  padding: 20px 12px 0 12px;
  overflow-y: auto;
`;

export const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  grid-column: 1 / span 3;
  height: 4.8rem;
  justify-content: center;
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  font-size: 1.4rem;
  padding: 4px 12px;
  margin: 0 12px;
  margin-bottom: 0.1rem;
  min-height: 2.8rem;
  /* text-align: center; */
  width: 90%;
`;
