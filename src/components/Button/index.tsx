import React from "react";
import { LinkProps } from "react-router-dom";
import { StyledButton, StyledButtonProps } from "./styles";

type Props = Partial<LinkProps> & StyledButtonProps;

const Button: React.FC<Props> = (props) => {
  return <StyledButton {...props} as={!props.to ? "button" : undefined} />;
};

export default Button;
