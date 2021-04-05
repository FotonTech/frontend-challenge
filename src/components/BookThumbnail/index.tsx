import React from "react";
import { Link } from "react-router-dom";

import { StyledImg, StyledNoThumbBook } from "./styles";

type Props = React.ComponentProps<typeof StyledImg> & {
  redirectTo?: string;
};

const NoThumbBook = ({ shadow }: { shadow?: boolean }) => (
  <StyledNoThumbBook shadow={shadow}>
    Este livro não possui capa registrada
  </StyledNoThumbBook>
);

const BookThumbnail: React.FC<Props> = ({ redirectTo, ...props }) => {
  const imgElement = !props.src ? (
    <NoThumbBook shadow={props.shadow} />
  ) : (
    <StyledImg {...props} />
  );
  return redirectTo ? <Link to={redirectTo}>{imgElement}</Link> : imgElement;
};

export default BookThumbnail;
