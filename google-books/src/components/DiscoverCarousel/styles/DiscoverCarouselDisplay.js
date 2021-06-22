import styled from 'styled-components';

const DiscoverCarouselDisplay = styled.div`
margin-top: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
margin-right: 5%;
margin-left: 5%;

.carousel-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
}

.carousel-header h3 {
  font-family:  'SFProDisplay', sans-serif;
  font-size: 18px;
  color: #54565A;
}

.carousel-header h4 {
  font-family:  'SFProDisplay', sans-serif;
  color:#4ABDF1;
  font-size: 14px;
}
`;

export default DiscoverCarouselDisplay;
