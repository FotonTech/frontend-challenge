import styled from "styled-components"
import { assetsAltTexts, assetsPaths } from "../../constants/assetsPaths"
import { getAssetsUrl } from "../../utils/getAssetsUrl"

const Wrapper = styled.div`
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  font-size: 10px;
`

const Text = styled.span`
  display: block;
`

const BottomAppBar = () => {
return (
    <Wrapper>
      <div>
        <img src={getAssetsUrl(assetsPaths.homeIcon)} alt={assetsAltTexts.homeIcon} />
        <Text>Home</Text>
      </div>
      <div>
        <img src={getAssetsUrl(assetsPaths.bookIcon)} alt={assetsAltTexts.bookIcon} />
        <Text>Libraries</Text>
      </div>
      <div>
        <img src={getAssetsUrl(assetsPaths.userIcon)} alt={assetsAltTexts.userIcon} />
        <Text>Profile</Text>
      </div>
    </Wrapper>
  )
}

export default BottomAppBar
