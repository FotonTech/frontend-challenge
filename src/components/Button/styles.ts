import { ButtonHTMLAttributes } from "react";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/colors";

type StyledHtmlButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type StyledButtonProps = (Partial<LinkProps> & StyledHtmlButtonProps) & {
  color?: "primary" | "secondary";
  shadow?: boolean;
};

const styles = {
  primary: {
    background: colors.tint.primary,
    color: colors.text.light,
  },
  secondary: {
    background: colors.tint.secondary,
    color: colors.text.light,
  },
};

export const StyledButton = styled(Link)<StyledButtonProps>`
  border-radius: 24px;
  border: none;
  background-color: ${(p) => styles[p.color ?? "primary"].background};
  color: ${(p) => styles[p.color ?? "primary"].color};
  ${(p) =>
    p.shadow &&
    `box-shadow: 1px 4px 12px ${styles[p.color ?? "primary"].background}66;`}
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  margin: 4px;
  padding: 12px 16px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`;
