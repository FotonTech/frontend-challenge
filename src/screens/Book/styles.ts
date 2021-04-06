import styled from "styled-components";
import Button from "../../components/Button";
import colors from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
`;

export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
`;

export const BookInfoContainer = styled.section`
  display: grid;
  grid-gap: 12px 24px;
  grid-template-columns: 1fr 2fr;
  padding: 24px;
`;

export const BookDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  svg:hover {
    cursor: pointer;
  }
`;

export const BookTitleContainer = styled.span`
  flex-grow: 1;
`;

export const BookActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HeartButton = styled(Button)`
  align-items: center;
  display: flex;
  height: 36px;
  justify-content: center;
  padding: 4px;
  width: 36px;
`;

export const DescriptionContainer = styled.div`
  background-color: ${colors.body.default};
  box-sizing: border-box;
  flex-grow: 1;
  grid-column: 1 / span 2;
  padding: 24px;
  width: 100%;
`;
