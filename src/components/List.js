import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import { HomeContext } from '../pages/Home';
import BottomBar from '../BottomBar';


export const List = () => {
    const { searchValue, setSearchValue } = useContext(HomeContext);
    const history = useHistory();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        console.log(searchValue);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`)
            .then(res => {
                setBooks(chunk(res.data.items, 3));
            })
    }, [searchValue]);

    const RedirectToDetail = (data) => {
        //history.push('/Detail', { params: { book: data } });
        history.push({
            pathname: '/Detail',
            book: data,
        });
    };

    return (
        <>
            <ListContent>
                {(() => {
                    let resultRow = [];
                    books.map((row, i) => {
                        resultRow.push(
                            <ListRow key={'book-' + i}>
                                {(() => {
                                    let resultItem = [];
                                    row.map((item, index) => {
                                        resultItem.push(
                                            <ListItem key={'book-' + i + '-' + index} onClick={() => {
                                                RedirectToDetail(item);
                                            }}>
                                                <ListItemImage img={item.volumeInfo?.imageLinks?.thumbnail}></ListItemImage>
                                                <ListItemTitle>{item.volumeInfo.title}</ListItemTitle>
                                                <ListItemSubTitle>{(item.volumeInfo.authors) ? 'by ' + item.volumeInfo.authors[0] : ''}</ListItemSubTitle>
                                            </ListItem>
                                        );
                                    });

                                    return resultItem;
                                })()}
                            </ListRow>
                        );
                    })

                    return resultRow;
                })()}

            </ListContent>
        </>
    );
};

const chunk = (array, size) =>
    array.reduce((acc, _, i) => {
        if (i % size === 0) acc.push(array.slice(i, i + size))
        return acc
    }, [])

const ListContent = styled.div`
    margin: 40px 20px;
`;

const ListRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const ListItem = styled.div`
    cursor: pointer;
`;

const ListItemImage = styled.div`
    background: ${props => `url(${props.img})`};
    background-color: lightgray;
    width: 105px;
    height: 154px;
    background-position: center;
    background-size: auto;
    background-repeat: no-repeat;
    border-radius: 5px;
`;

const ListItemTitle = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: rgba(49, 49, 49, 0.8);
    margin-top: 10px;
    max-width: 105px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const ListItemSubTitle = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 900;
    font-size: 10px;
    line-height: 12px;
    color: rgba(49, 49, 49, 0.8);
    max-width: 105px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export default List;