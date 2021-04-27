import React, {  useContext } from 'react';

import styled from 'styled-components';
import { HomeContext } from '../pages/Home';

const SearchInput = styled.input`
    height: 60px;
    margin: 0px 20px;
    width: -webkit-fill-available;
    background: #FDFCFC;
    box-shadow: 5px 5px 80px rgb(212 173 134 / 12%);
    border-radius: 10px;
    border: none;
    font-size: 16px;
    outline: none;
    background-image: url(/030.png);
    background-repeat: no-repeat;
    background-size: auto 50%;
    background-position: 10px center;
    padding-left: 50px;
    position: relative;
`;

export const Search = () => {
    const { searchValue, setSearchValue } = useContext(HomeContext);

    return (
        <SearchInput placeholder='Search book' value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
        ></SearchInput>
    );
};

export default Search;