import React from 'react';
import { Col, Row } from 'reactstrap';
import { ReactComponent as BookOpen } from '../../images/book-open.svg';
import { ReactComponent as Headphones } from '../../images/headphones.svg';
import { ReactComponent as Share } from '../../images/share.svg';
import { Border, Container, GroupIcons, Icon } from './styled';

type BookDetailMenuProps = React.FC<{
  links: { readLink: string; listenLink: string; shareLink: string };
}>;

const BookDetailMenu: BookDetailMenuProps = ({
  links: { readLink, listenLink, shareLink }
}) => {
  return (
    <Container className="fixed-bottom">
      <Row>
        <Col>
          <GroupIcons>
            <a href={readLink} target="_blank" rel="noreferrer">
              <Icon>
                <BookOpen /> Read
              </Icon>
            </a>
            <Border />
            <a href={listenLink} target="_blank" rel="noreferrer">
              <Icon>
                <Headphones /> Listen
              </Icon>
            </a>
            <Border />
            <a href={shareLink} target="_blank" rel="noreferrer">
              <Icon>
                <Share /> Share
              </Icon>
            </a>
          </GroupIcons>
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetailMenu;
