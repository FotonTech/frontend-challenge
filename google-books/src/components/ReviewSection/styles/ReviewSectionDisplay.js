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

.thumbnail-info {
  width: 90%;
  margin-right: 5%;
  margin-left: 5%;
}

.video-title {
  margin-top: 15px;
  font-size: 12px;
  font-weight: bold;
  color: rgba(107, 107, 107, 0.8);
}
span {
  display: flex;
  flex-direction: row;
}
span p {
  font-size: 8px;
  color: rgba(106, 103, 103, 0.8);
  margin: 7px 16px 0 0;
}

.description {
  margin-top: 6px;
  font-size: 10px;
  color: rgba(107, 107, 107, 0.8);
}
`;

export default ReviewSectionDisplay;
