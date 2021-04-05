import React from "react";

import { StyledTitle, HeadingVariant, StyledTitleProps } from "./styles";

type Props = StyledTitleProps & {
  as?: HeadingVariant | "span" | "p";
};

const Title: React.FC<Props> = ({ as, ...props }) => {
  return <StyledTitle {...props} as={as ?? props.variant} />;
};

export default Title;
