import { Card as CardStyled } from 'reactstrap';
import styled from 'styled-components';
import { ReactComponent as ChartIconSvg } from '../../images/chart-icon.svg';

type SvgIconType = {
  size: string;
};

export const DiscoverWrapper = styled.div`
  --oval-spacing: 38px;

  .carousel {
    margin-right: -19px;
    &__slider {
      padding-top: var(--oval-spacing);
      margin-top: calc(var(--oval-spacing) * -1);

      &-tray {
        display: flex;
        align-items: center;
      }
    }

    &__inner-slide {
      position: static;
      top: auto;
      left: auto;
      width: auto;
      height: auto;
    }

    &__slide {
      float: none;
      padding-bottom: 0 !important;
      height: auto;

      &:nth-child(odd) {
        .oval {
          &-bottom {
            display: block;
          }
        }
      }
      &:nth-child(even) {
        .card {
          background: #451475;
        }
        .oval {
          &-top {
            display: block;
          }
          &-bottom {
            display: none;
          }
        }
      }

      &--hidden {
        .card {
          &-body {
            padding: 13px 14px 14px;
          }
          &-title {
            font-size: 25px;
          }
          &-subtitle {
            letter-spacing: 0.6px;
            font-size: 12px;
          }
          &-text {
            margin-left: 1px;
          }
        }
        .col {
          &-8 {
            flex: 0 0 100%;
            max-width: 100%;
          }
          &-4 {
            display: none;
          }
        }
      }
    }
  }
`;

export const Card = styled(CardStyled)`
  width: 272px;
  background: #00173d;
  border-radius: 5px;
  border: none;

  .card {
    &-body {
      padding: 17px 20px 19px;
      position: relative;
      z-index: 1;
    }

    &-title {
      font-family: 'Playfair Display', sans-serif;
      font-weight: bold;
      font-size: 27px;
      line-height: 36px;
      letter-spacing: 2px;
      margin-bottom: 5px;
      color: #fefefe;
    }

    &-subtitle {
      font-size: 14px;
      font-style: italic;
      line-height: 16px;
      letter-spacing: 0.7px;
      margin-top: 0;
      margin-bottom: 30px;
      color: #e7e7e1;
    }

    &-text {
      font-size: 10px;
      line-height: 12px;
      letter-spacing: -0.6px;
      color: #e7e7e1;

      svg {
        margin-right: 1px;
      }

      span {
        font-weight: 600;
      }
    }

    &-img {
      width: 73px;
      height: 109px;
      border-radius: 0;
      margin-block: 15px;
      margin-left: -2px;
      position: relative;
      z-index: 1;
    }
  }

  .oval {
    &-top,
    &-bottom {
      display: none;
      position: absolute;
    }
    &-top {
      top: calc(var(--oval-spacing) * -1);
      left: -6px;
    }
    &-bottom {
      bottom: -13px;
      left: -26px;
    }
  }
`;

export const ImageWrapper = styled.div``;

export const OvalImg = styled.img``;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #4550a7;
  position: absolute;
  left: -38px;
  margin-top: -2px;
  border-radius: 100%;
`;

export const Triangle = styled.div`
  height: 0;
  width: 0;
  border-left: 32px solid #fcbc48;
  border-right: 0 solid transparent;
  border-bottom: 28px solid transparent;
  border-top: 0 solid transparent;
  position: absolute;
  top: 7px;
  left: -11px;
  transform: rotateZ(9deg);
  z-index: 2;
`;

export const Rectangle = styled.div`
  width: 46px;
  height: 4px;
  background: #ec6374;
  transform: rotate(14deg);
  position: absolute;
  bottom: 34px;
  left: -37px;
`;

export const ChartIcon = styled(ChartIconSvg)`
  width: ${({ size }: SvgIconType) => size};
  height: ${({ size }: SvgIconType) => size};
  position: relative;
  top: -1px;
  margin-right: 2px;
`;
