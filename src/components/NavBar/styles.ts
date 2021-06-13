import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.nav`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  padding: 8px 12px 0;

  svg:hover {
    cursor: pointer;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

export const TitleWrapper = styled.span`
  display: flex;
  width: auto;
  padding-bottom: 0.1rem;
  border-bottom: 0.1rem solid ${colors.text.secondary}66;
  text-transform: capitalize;
`;
