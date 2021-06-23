import styled from 'styled-components';

const CarouselCardDisplay = styled.div`
margin-right: 10px;


.book-card {
  width: 272px;
  height: 139px;
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #00173D;
}

.main {
  background-color: #00173D;
}

.background {
  background-color: #451475;
  height: 128px;
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
  align-items: center;
}

.stats {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}

.card-info div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40px;
}

.card-info p {
  color: #E7E7E1;
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

export default CarouselCardDisplay;
