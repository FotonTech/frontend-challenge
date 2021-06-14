import styled from "styled-components";
import { assetsPaths } from "../../../../constants/assetsPaths";
import { getAssetsUrl } from "../../../../utils/getAssetsUrl";

export const CircleWave1 = styled.img`
  position: absolute;
  top: 248px;
  left: 5px;
  content: url(${getAssetsUrl(assetsPaths.homeFirstCircleWave)});
`

export const CircleWave2 = styled.img`
  position: absolute;
  top: 190px;
  right: 0px;
  content: url(${getAssetsUrl(assetsPaths.homeSecondCircleWave)});
`

export const CircleWave3 = styled.img`
  position: absolute;
  top: -30px;
  right: -20px;
  content: url(${getAssetsUrl(assetsPaths.homeThirdCircleWave)});
`

export const CircleWave4 = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
  content: url(${getAssetsUrl(assetsPaths.homeFourthCircleWave)});
`

export const OvalShape1 = styled.img`
  position: absolute;
  top: 14px;
  left: 144px;
  content: url(${getAssetsUrl(assetsPaths.homeFirstOvalShape)});
`

export const OvalShape2 = styled.img`
  position: absolute;
  top: 0px;
  right: 90px;
  content: url(${getAssetsUrl(assetsPaths.homeSecondOvalShape)});
`

export const YellowTriangle = styled.img`
  position: absolute;
  top: 4px;
  left: 210px;
  content: url(${getAssetsUrl(assetsPaths.homeYellowTriangle)});
`

export const Retangle1 = styled.img`
  position: absolute;
  bottom: 28px;
  left: 185px;
  content: url(${getAssetsUrl(assetsPaths.homeFirstRetangle)});
`

export const Retangle2 = styled.img`
  position: absolute;
  bottom: 20px;
  right: 0;
  content: url(${getAssetsUrl(assetsPaths.homeSecondRetangle)});
`