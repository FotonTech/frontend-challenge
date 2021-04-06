import styled, { StyledComponent } from "styled-components";
import colors from "../../utils/colors";

export type TextVariant = "body" | "subtitle";
export type TextElements = "p" | "span" | "b" | "i" | "code";

type TextStyle = {
  fontFamily?: string;
  fontSize: number;
  fontWeight?: "bold" | "normal" | number;
  lineHeight?: string | number;
  margin?: string | number;
  opacity?: number;
  textAlign?: "left" | "right" | "center";
};

const styles: Record<TextVariant, TextStyle> = {
  body: {
    fontSize: 1,
    lineHeight: "1.1rem",
  },
  subtitle: {
    fontSize: 0.8,
    // fontWeight: "bold",
    opacity: 0.5,
  },
};

export type StyledTypoProps = Partial<TextStyle> & {
  variant: TextVariant;
};

export const StyledTypo: StyledComponent<
  "p",
  any,
  StyledTypoProps
> = styled.p<StyledTypoProps>`
  color: ${colors.text.primary};
  font-family: "Source Sans Pro", sans-serif;
  font-size: ${(p) => p.fontSize ?? styles[p.variant].fontSize}rem;
  font-weight: ${(p) =>
    p.fontWeight ?? styles[p.variant].fontWeight ?? "normal"};
  ${(p) =>
    (p.lineHeight ?? styles[p.variant]) &&
    `line-height: ${p.lineHeight ?? styles[p.variant]};`}
  margin: ${(p) => p.margin ?? "8px 0"};
  opacity: ${(p) => p.opacity ?? styles[p.variant].opacity ?? 1};
  ${(p) => p.textAlign && `text-align: ${p.textAlign};`}
`;
