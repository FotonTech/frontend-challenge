import React from "react";

import { StyledImg, StyledLink, StyledNoThumbBook } from "./styles";

type Props = React.ComponentProps<typeof StyledImg> & {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const NoThumbBook = ({ shadow }: { shadow?: boolean }) => (
  <StyledNoThumbBook shadow={shadow}>
    Este livro não possui capa registrada
  </StyledNoThumbBook>
);

const BookThumbnail: React.FC<Props> = ({ onClick, ...props }) => {
  const imgElement = !props.src ? (
    <NoThumbBook shadow={props.shadow} />
  ) : (
    <StyledImg {...props} />
  );
  return onClick ? (
    <StyledLink onClick={onClick}>{imgElement}</StyledLink>
  ) : (
    imgElement
  );
};

export default BookThumbnail;
