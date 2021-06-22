import styled from 'styled-components';

const ReviewSectionDisplay = styled.section`
margin-top: 30px;
margin-bottom: 70px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
margin-right: 5%;
margin-left: 5%;

.section-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
}

.section-header h3 {
  font-family:  'SFProDisplay', sans-serif;
  font-size: 18px;
  color: #54565A;
}

.section-header h4 {
  font-family:  'SFProDisplay', sans-serif;
  color:#4ABDF1;
  font-size: 14px;
}

`;

export default ReviewSectionDisplay;
