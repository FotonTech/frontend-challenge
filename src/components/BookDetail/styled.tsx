import { Link } from 'react-router-dom';
import { Col as ColBs } from 'reactstrap';
import styled from 'styled-components';

export const Col = styled(ColBs)``;

export const Header = styled.div`
  height: 282px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 67px;
  background: #fff6e5;
  border-radius: 0px 0px 100px 0px;
  position: relative;
`;

export const ArrowLink = styled(Link)`
  display: flex;
  position: absolute;
  left: 31px;
  top: 54px;
  height: 16px;
  width: 16px;
`;

type CircleType = {
  size: string;
  bgColor?: string;
  filled: boolean;
};

export const Circle = styled.div.attrs((props: CircleType) => ({
  bgColor: props.bgColor,
  filled: props.filled
}))<CircleType>`
  display: flex;
  position: absolute;
  border-radius: 100%;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;

  ${({ filled, bgColor }) =>
    filled ? `background-color: ${bgColor}` : `border: 2px solid ${bgColor}`};

  &.pos {
    &-1 {
      left: 46px;
      top: 125px;
    }

    &-2 {
      left: 72px;
      top: 115px;
    }

    &-3 {
      right: 102px;
      top: 85px;
    }
  }
`;

export const Thumbnail = styled.img`
  width: 153px;
  height: 229px;
  margin-top: 84px;
  position: relative;
  z-index: 1;
`;

type OvalImgType = {
  height: string;
  width: string;
};

export const OvalImg = styled.img.attrs((props: OvalImgType) => ({
  height: props.height,
  width: props.width
}))<OvalImgType>`
  display: flex;
  position: absolute;
  /* transform: rotate(25deg); */
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;

  &.pos {
    &-1 {
      /* right: -39px; */
      /* top: -17px; */
      right: 0;
      top: 0;
    }

    &-2 {
      right: 97px;
      bottom: 40px;
      transform: rotate(25deg);
    }
  }
`;

export const Title = styled.h4`
  line-height: 29px;
  letter-spacing: 0.5px;
  font-weight: 400;
  color: #36383a;
  padding-right: 15px;
  margin-bottom: 7px;

  b {
    font-weight: 700;
    letter-spacing: 1.3px;
  }
`;

export const Author = styled.h6`
  line-height: 19px;
  color: #ff6978;
  margin-left: 1px;
  letter-spacing: 0.8px;
  margin-bottom: 10px;
`;

export const Text = styled.div`
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 1.1px;
  color: rgba(49, 49, 49, 0.6);
  margin-left: 1px;
`;
