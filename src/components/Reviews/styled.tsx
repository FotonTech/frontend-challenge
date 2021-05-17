import { Card as CardStyled, CardImg as CardImgStyled } from 'reactstrap';
import styled from 'styled-components';
import { ReactComponent as BookIconSvg } from '../../images/book-icon.svg';

type SvgIconType = {
  size: string;
};

export const Wrapper = styled.div`
  padding-left: calc(var(--card-img-width) + 10px);
  padding-top: 10px;
  padding-bottom: 9px;
`;

export const Card = styled(CardStyled)`
  background: transparent;
  border-radius: 0;
  border: none;

  .card {
    &-body {
      box-shadow: 0px 2px 4px rgba(229, 229, 229, 0.5);
    }

    &-img-top {
      border-radius: 0;
    }

    &-title {
      font-weight: bold;
      line-height: 14px;
      letter-spacing: 2px;
      color: #313131;
      margin-bottom: 5px;
    }

    &-subtitle {
      font-family: 'Roboto', sans-serif;
      font-size: 10px;
      line-height: 12px;
      letter-spacing: -0.1px;
      margin-top: 0;
      margin-bottom: 21px;
      color: #74776d;
    }

    &-text {
      font-size: 10px;
      line-height: 12px;
      letter-spacing: -0.05px;
      color: #2a2b26;

      span {
        font-weight: 600;
        color: #ff6978;
      }
    }
  }

  .wrap-figures {
    overflow: hidden;
    position: relative;
  }

  .oval-top {
    position: absolute;
    top: -19px;
    right: -34px;
  }
`;

export const CardImg = styled(CardImgStyled)`
  width: ${({ width }): string => width}px;
  height: ${({ height }): string => height}px;
`;

export const OvalImg = styled.img``;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #4550a7;
  border-radius: 100%;
  position: absolute;
  top: -7px;
  right: 89px;
`;

export const Rectangle = styled.div`
  width: 46px;
  height: 4px;
  background: #ec6374;
  transform: rotate(14deg);
  position: absolute;
  bottom: 26px;
  right: -23px;
`;

export const BookIcon = styled(BookIconSvg)`
  width: ${({ size }: SvgIconType) => size};
  height: ${({ size }: SvgIconType) => size};
  position: relative;
  top: -1px;
  margin-right: 3px;
`;
