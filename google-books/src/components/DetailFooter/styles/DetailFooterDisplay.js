import styled from 'styled-components';

const DetailFooterDisplay = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
width:335px;
height: 56px;
background-color: #FFFCF9;

.icon {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* width: 18%; */
}

.icon p {
  margin-left: 10px;
  font-size: 14px;
}
`;

export default DetailFooterDisplay;
