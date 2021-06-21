import styled from 'styled-components';

const AppDisplay = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
margin-left: 5%;
margin-right: 5%;
margin-top: 50px;

div {
  float: left;
}

p {
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
`;

export default AppDisplay;
