import { Col as ColBs } from 'reactstrap';
import styled from 'styled-components';

export const Col = styled(ColBs)`
  max-width: 100px !important;
`;

export const Wrapper = styled.div`
  margin-top: 12px;

  .card {
    border-radius: 0;
    border: none;
    background-color: transparent;
    width: 100px;
    margin-bottom: 14px;

    &-body {
      padding: 0;
      padding-top: 10px;
    }

    &-image {
    }

    &-title,
    &-subtitle {
      color: rgba(49, 49, 49, 0.8);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    &-title {
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: -0.5px;
      margin-bottom: 11px;
    }

    &-subtitle {
      font-family: 'Roboto', sans-serif;
      font-weight: 900;
      font-size: 10px;
      line-height: 12px;
      letter-spacing: 0.1px;
    }
  }
`;

export const CardImg = styled.div`
  background-image: url(${({ bgImage }: { bgImage?: string }) => bgImage});
  background-position: center;
  background-repeat: no-repeat;
  width: 100px;
  height: 150px;
`;
