import styled from 'styled-components';

const CurrentlyDisplay = styled.section`
margin-top: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 335px;
margin-right: 20px;

.section-header {
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
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

.section-info {
  width: 100%;
}

.cover {
  width: 88px;
  height: 130px;
  position: absolute;
  top: 555px;
  left: 20px;
}
.info {
  padding-left: 118px;
  height: 100px;
  width: 331px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #EEF5DB;
  margin-right: 20px;
}

.title {
  font-size: 20px;
  font-family: 'Playfair Display', serif;
  margin-bottom: 5px;
  color: #2A2B26;
}

.author {
  font-size: 10px;
  font-family: 'Roboto', sans-serif;
  color: #74776D;
}

.reading-point {
  font-size: 10px;
  font-family:  'SFProDisplay', sans-serif; 
}

.reading-point b {
  color: #FF6978;
}

.chapter-span {
  margin-top: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.chapter-span img{
  width: 10px;
  height: 10px;
}
`;

export default CurrentlyDisplay;
