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
  width: 100%;
  max-width: 331px;
  background: transparent;
  border-radius: 0;
  border: none;
  left: -19px;
  --card-img-width: 88px;
  --card-img-height: 130px;
  height: var(--card-img-height);
  justify-content: center;

  .card {
    &-body {
      border-radius: 0px 3px 3px 0px;
      box-shadow: 0px 3px 45px rgba(121, 141, 67, 0.115084);
      background: #eef5db;
      padding: 0;
      padding-left: 20px;
      position: relative;
      z-index: 1;
    }

    &-img {
      border-radius: 1px;
      position: absolute;
      z-index: 1;
      top: -15px;
    }

    &-title {
      font-family: 'Playfair Display', sans-serif;
      font-weight: bold;
      line-height: 27px;
      letter-spacing: 2px;
      margin-bottom: 5px;
      color: #2a2b26;
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
  width: var(--card-img-width);
  height: var(--card-img-height);
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
