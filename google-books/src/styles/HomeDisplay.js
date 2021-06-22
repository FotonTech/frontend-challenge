import styled from 'styled-components';

const HomeDisplay = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
margin-left: 5%;
margin-right: 5%;
margin-top: 40px;
background-color: #FFFCF9;

/* div {
  float: left;
} */

.welcome-message p {
  display: flex;
  font-size: 24px;
}
.username {
  color: #FF6978;
}

.welcome-message {
  align-self: flex-start;
  margin-top: 30px;
}

.search-results {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
}

.load-more {
  border: none;
  background-color: #FFFCF9;
  color: #4ABDF1;
}
`;

export default HomeDisplay;
