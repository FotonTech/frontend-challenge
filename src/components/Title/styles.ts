import styled from "styled-components";
import colors from "../../utils/colors";

export type HeadingVariant = `h${1 | 2 | 3 | 4 | 5 | 6}`;
type HeadingStyle = {
  fontFamily?: string;
  fontSize: number;
  fontWeight?: "bold" | "normal" | number;
  textAlign?: "left" | "right" | "center";
  margin?: string | number;
};

const styles: Record<HeadingVariant, HeadingStyle> = {
  h1: {
    fontSize: 9.6,
  },
  h2: {
    fontSize: 6.0,
    fontWeight: "bold",
  },
  h3: {
    fontSize: 4.8,
  },
  h4: {
    fontSize: 3.4,
  },
  h5: {
    fontSize: 2.4,
  },
  h6: {
    fontSize: 1.4,
    fontFamily: "'Source Sans Pro', sans-serif",
  },
};

const SimpleHeading = styled.h1``;

export type StyledTitleProps = Partial<HeadingStyle> & {
  variant: HeadingVariant;
};

export const StyledTitle = styled(SimpleHeading)<StyledTitleProps>`
  color: ${colors.text.primary};
  ${(p) =>
    styles[p.variant].fontFamily &&
    `font-family: ${styles[p.variant].fontFamily};`}
  font-size: ${(p) => p.fontSize ?? styles[p.variant].fontSize}rem;
  font-weight: ${(p) =>
    p.fontWeight ?? styles[p.variant].fontWeight ?? "normal"};
  margin: ${(p) => p.margin ?? "12px 0"};
  ${(p) => p.textAlign && `text-align: ${p.textAlign};`}
`;
