import styled from 'styled-components';

const DiscoverCarouselDisplay = styled.div`
margin-top: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;

.carousel-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
}

.carousel-header h4 {
  color:#4ABDF1;
}


.book-card {
  background-color: #00173D;
  width: 272px;
  height: 139px;
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.card-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90px;
}

span {
  display: flex;
  flex-direction: row;
}

.stats {
  width: 10px;
  height: 10px;
  margin-right: 4px;
}

.card-info div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40px;
}

.card-info p {
  color: white;
}

.book-title {
  font-size: 27px;
  font-family: 'Playfair Display', serif;
  /* font-weight: 700; */
}

.book-author {
  font-size: 14px;
  font-family:  'SFProDisplay', sans-serif;
  font-style: italic;
}

.book-length {
  font-size: 10px;
  font-family:  'SFProDisplay', sans-serif;
}

.book-cover {
  width: 73px;
  height: 109px;
}

`;

export default DiscoverCarouselDisplay;
