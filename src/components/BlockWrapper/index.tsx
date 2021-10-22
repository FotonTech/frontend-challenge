import { FC } from 'react';
import { Row } from 'reactstrap';
import { Children, Col, H5, Link } from './styled';

export type BlockWrapperType = {
  children: React.ReactNode;
  title: string;
  linkTitle: string;
  href: string;
};

const BlockWrapper: FC<BlockWrapperType> = ({
  children,
  title,
  linkTitle,
  href,
}: BlockWrapperType) => {
  return (
    <>
      <Row>
        <Col className="d-flex justify-content-between">
          <H5>{title}</H5>
          <Link href={href}>{linkTitle}</Link>
        </Col>
      </Row>
      <Children>{children}</Children>
    </>
  );
};

export default BlockWrapper;
