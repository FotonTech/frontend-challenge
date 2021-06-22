import styled from 'styled-components';

const CurrentlyDisplay = styled.section`
margin-top: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;

.section-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
}

.section-header h4 {
  color:#4ABDF1;
}

.section-info {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.cover {
  width: 88px;
  height: 130px;
  margin-right: 10px;
}
.info {
  height: 100px;
  background-color: #EEF5DB;
  width: 331px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.title {
  font-size: 20px;
  font-family: 'Playfair Display', serif;
}

.author {
  font-size: 10px;
  font-family: 'Roboto', sans-serif;
}

.reading-point {
  font-size: 10px;
  font-family:  'SFProDisplay', sans-serif; 
}

.reading-point b {
  color: #FF6978;
}

.chapter-span {
  display: flex;
  flex-direction: row;
  align-items: center;
}
`;

export default CurrentlyDisplay;
