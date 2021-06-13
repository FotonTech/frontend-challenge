import styled from "styled-components";
import mainBgPattern from "../../assets/main-bg-pattern.svg";
import colors from "../../utils/colors";

export const Container = styled.header`
  align-items: flex-end;
  background: linear-gradient(
    to bottom,
    ${colors.primary}00,
    ${colors.primary}20,
    ${colors.primary}d0
  );
  box-shadow: inset -2px 2px 22px rgba(3, 3, 3, 0.3);
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  min-height: 100%;
  padding: 0 24px;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 960px) {
    padding: 0;
    > :not(div) {
      display: none;
    }
  }
`;

export const AnimatedBackground = styled.div`
  animation: slide-up 5s linear infinite;
  background-image: url("${mainBgPattern}");
  height: 300vh;
  left: -60vw;
  min-height: 300vw;
  min-width: 200vh;
  position: absolute;
  top: -60vh;
  transform: rotate(30deg);
  width: 200vw;
  z-index: -1;

  @keyframes slide-up {
    from {
      transform: rotate(30deg);
    }
    to {
      /* translate Y: background height */
      transform: rotate(30deg) translateY(-359px);
    }
  }
`;
