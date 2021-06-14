import styled from "styled-components"
import { assetsPaths } from "../../../../constants/assetsPaths"
import { getAssetsUrl } from "../../../../utils/getAssetsUrl"

const Wrapper = styled.div`
  position: absolute;
  height: 56px;
  margin: 0 20px 52px 20px;
  width: calc(100% - 40px);
  left: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  border-radius: 2px;
`

const Divider = styled.div`
  height: 16px;
  border: 1px solid rgba(151, 151, 151, 0.2);
`

const Button = styled.div`
  display: flex;
  align-items: center;
  font-weight: bolder;
  font-size: 14px;
  img {
    margin-right: 10px;
  }
`

const AppBar = () => {
  return (
    <Wrapper>
      <Button>
        <img src={getAssetsUrl(assetsPaths.openBookIcon)} alt={assetsPaths.openBookIcon} />
        <div>Read</div>
      </Button>
      <Divider />
      <Button>
        <img src={getAssetsUrl(assetsPaths.headPhonesIcon)} alt={assetsPaths.headPhonesIcon} />
        <div>Listen</div>
      </Button>
      <Divider />
      <Button>
        <img src={getAssetsUrl(assetsPaths.shareIcon)} alt={assetsPaths.shareIcon} />
        <div>Share</div>
      </Button>
    </Wrapper>
  )
}

export default AppBar
