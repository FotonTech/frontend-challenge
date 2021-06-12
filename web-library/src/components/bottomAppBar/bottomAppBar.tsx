import styled from "styled-components"

const Wrapper = styled.div`
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  border: 1px solid black;
  text-align: center;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const BottomAppBar = () => {
return (
    <Wrapper>
      <div>
        <div>
          icon
        </div>
        <p>Home</p>
      </div>
      <div>
        <div>
          icon
        </div>
        <p>Libraries</p>
      </div>
      <div>
        <div>
          icon
        </div>
        <p>Profile</p>
      </div>
    </Wrapper>
  )
}

export default BottomAppBar
