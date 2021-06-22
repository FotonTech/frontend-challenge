import styled from 'styled-components';

const BookCardDisplay = styled.div`
width: 25%;
margin-right: 10px;
margin-left: 10px;
margin-bottom: 30px;
.title {
  font-size: 12px;
  margin-bottom: 5px;
  font-family:  'SFProDisplay', sans-serif;
}

.author {
  font-size: 10px;
  font-family: 'Roboto', sans-serif;
}

img {
  width: 100px;
  height: 150px;
  margin-bottom: 10px;
}
`;

export default BookCardDisplay;
