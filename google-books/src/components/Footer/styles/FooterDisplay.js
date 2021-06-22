import styled from 'styled-components';

const FooterSection = styled.footer`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: #FFFCF9;
position: fixed;
bottom: 0;
height: 59px;

.footer-section {
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 26px;
  height: 40px;
}

p {
  font-size: 10px;
  text-align: center;
  font-family:  'SFProDisplay', sans-serif;
  color: #BFBEBF;
}

.selected {
  color: #313131;
}
`;

export default FooterSection;
