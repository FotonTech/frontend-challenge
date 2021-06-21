import styled from 'styled-components';

const SearchInputDisplay = styled.label`
position: relative;
padding: 0;
margin: 0;
width: 336px;
height: 48px;
img {
  position:absolute;
  left: 16px;
  bottom: 16px;
  height:16px;
  width: 16px;
}
input {
  width: 336px;
  height: 48px;
  margin: 0;
  padding-left: 40px;
  border: none;
  border-radius:10px;
  font-weight: bold;
}

input:focus {
  outline: none;
  border: 1px solid lightblue;
  border-radius: 10px;
}
`;

export default SearchInputDisplay;
