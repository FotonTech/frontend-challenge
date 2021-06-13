import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  height: 56px;
  margin: 0 20px 52px 20px;
  width: calc(100% - 40px);
  border: 1px solid black;
  left: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  justify-content: space-evenly;
`

const AppBar = () => {
  return (
    <Wrapper>
      <div>
        icon
      </div>
      <div>
        icon
      </div>
      <div>
        icon
      </div>
    </Wrapper>
  )
}

export default AppBar
