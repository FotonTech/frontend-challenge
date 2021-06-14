import styled from "styled-components"
import { assetsAltTexts, assetsPaths } from "../../../../constants/assetsPaths"
import { getAssetsUrl } from "../../../../utils/getAssetsUrl"

const Wrapper = styled.div`
  position: absolute;
  top: 55px;
  left: 33px;
  :hover {
    cursor: pointer;
  }
`

const GoBackButton = () => {
  return (
    <Wrapper>
      <img src={getAssetsUrl(assetsPaths.backArrowIcon)} alt={assetsAltTexts.backArrowIcon} />
    </Wrapper>
  )
}

export default GoBackButton
