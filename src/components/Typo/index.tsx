import React from "react";

import {
  StyledTypo,
  TextVariant,
  TextElements,
  StyledTypoProps,
} from "./styles";

type Props = StyledTypoProps & {
  as?: TextElements | `h${1 | 2 | 3 | 4 | 5 | 6}`;
};

const defaultVariantTags: Record<TextVariant, TextElements> = {
  subtitle: "span",
  body: "p",
};

const Typo: React.FC<Props> = ({ as, ...props }) => {
  return <StyledTypo {...props} as={as ?? defaultVariantTags["body"]} />;
};

export default Typo;
