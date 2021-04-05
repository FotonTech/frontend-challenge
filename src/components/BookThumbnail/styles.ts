import styled from "styled-components";
import colors from "../../utils/colors";

type StyledThumbProps = {
  shadow?: boolean;
};

export const StyledImg = styled.img<StyledThumbProps>`
  height: 100%;
  max-height: 17rem;
  object-fit: cover;
  width: 100%;

  ${(p) => p.shadow && `box-shadow: 1px 4px 20px ${colors.text.primary}86;`}
`;

export const StyledNoThumbBook = styled.div<StyledThumbProps>`
  align-items: center;
  background-color: ${colors.body.gray};
  color: ${colors.text.secondary};
  display: flex;
  height: 100%;
  max-height: 17rem;
  text-align: center;
  width: 100%;

  ${(p) => p.shadow && `box-shadow: 1px 4px 20px ${colors.text.primary}86;`}
`;

// export const StyledLink = styled(Link)`
//     :hover {
//         cursor:
//     }
// `
