import styled from 'styled-components';

const DetailHeaderDisplay = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #FFF6E5;
width: 100%;
padding-top: 40px;
border-bottom-right-radius: 100px;

.return-home {
  align-self: flex-start;
  margin-left: 19px;
}

button {
  background-color: #FFF6E5;
  border: none;
  /* align-self: flex-start; */
  margin-bottom: 15px;
}

.book-cover {
  height:229px;
  width: 153px;
}
`;

export default DetailHeaderDisplay;
