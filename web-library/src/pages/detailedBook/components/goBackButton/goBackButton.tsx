import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { assetsAltTexts, assetsPaths } from "../../../../constants/assetsPaths"
import { goBack } from "../../../../router/routerCoordinator"
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
  const history = useHistory()

  return (
    <Wrapper onClick={() => goBack(history)}>
      <img src={getAssetsUrl(assetsPaths.backArrowIcon)} alt={assetsAltTexts.backArrowIcon} />
    </Wrapper>
  )
}

export default GoBackButton
