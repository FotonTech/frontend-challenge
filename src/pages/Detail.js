import React, { useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import styled from 'styled-components';
import ShareBar from "../components/ShareBar";

export const Detail = (item) => {
    const location = useLocation();
    const history = useHistory();
    const book = location?.book;

    useEffect(() => {
        if (!book) {
            history.goBack();
        }
    }, []);

    const RedirectToList = (data) => {
        history.goBack();
    };

    return (
        <>
            <Background>
                <ReturnButton onClick={() => {
                    RedirectToList(item);
                }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 8H1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 15L1 8L8 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </ReturnButton>
                <HeaderDetail>
                    <HeaderDetailImage img={book?.volumeInfo?.imageLinks?.thumbnail}></HeaderDetailImage>
                </HeaderDetail>
                <HeaderDetailTitle><b>{book?.volumeInfo?.title}</b>{book?.volumeInfo?.subtitle ? ':' + book?.volumeInfo?.subtitle : <></>}</HeaderDetailTitle>
                <HeaderDetailAuthor>{book?.volumeInfo?.authors}</HeaderDetailAuthor>
                <HeaderDetailResume>{book?.volumeInfo?.description}</HeaderDetailResume>
            </Background>
            <ShareBar></ShareBar>
        </>
    );
};

const Background = styled.div`
    position: relative;
`;

const ReturnButton = styled.div`
    position: absolute;
    top: 45px;
    left: 25px;
    cursor: pointer;
    z-index: 100;
`;

const HeaderDetail = styled.div`
    height: 282px;
    width: 100%;
    border-bottom-right-radius: 140px;
    background: url(/oval-5.png),url(/oval-2.png),url(/oval-4.png),url(/oval-6.png),url(/oval-7.png);
    background-repeat: no-repeat;
    background-position: right top,270px 114px,270px 114px,92px 114px,55px 125px;
    background-color: #FFF6E5;
    position: relative;
`;

const HeaderDetailImage = styled.div`
    width: 150px;
    height: 234px;
    position: absolute;
    bottom: -65px;
    left: calc(50% - 75px);
    background: ${props => `url(${props.img})`};
    background-color: lightgray;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;

const HeaderDetailTitle = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 1.5px;
    color: #36383A;
    margin: 0 20px;
    margin-top: 90px;
`;

const HeaderDetailAuthor = styled.div`
    margin: 0 20px;
    margin-top: 10px;
    font-family: SF Pro Display;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.670588px;
    color: #FF6978;
`;

const HeaderDetailResume = styled.div`
    margin: 0 20px;
    margin-top: 10px;
    margin-bottom: 125px;
    font-family: SF Pro Display;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.2px;
    color: rgba(49, 49, 49, 0.6);
`;

export default Detail;