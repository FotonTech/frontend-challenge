import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BottomBar from '../BottomBar';
import List from '../components/List';
import Search from '../components/Search';

export const HomeContext = createContext({});

export const HomeProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <>
            <Background>
                <HomeContext.Provider
                    value={{
                        searchValue, setSearchValue
                    }}
                >
                    {(searchValue !== '') ?
                        <>
                            <Search></Search>
                            <List></List>
                        </>
                        :
                        <>
                            <Search></Search>
                            {children}
                        </>
                    }
                </HomeContext.Provider>

            </Background>
            <BottomBar></BottomBar>
        </>
    );
}

export const Home = () => {

    const { searchValue } = useContext(HomeContext);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        console.log(searchValue);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=.`)
            .then(res => {
                setBooks(res.data.items);
            })
    }, []);

    return (
        <HomeProvider>
            <WelcomeText>Hi,
                <WelcomeTextBolder>Mehmed Al Fatih</WelcomeTextBolder>
                <WelcomeTextIcon></WelcomeTextIcon>
            </WelcomeText>

            <SubTitle>
                <SubTitleText>Discover new book</SubTitleText>
                <SubTitleLink>More</SubTitleLink>
            </SubTitle>

            <DiscoverCarousel>
                <DiscoverCarouselInner>
                    <DiscoverCarouselItem1>
                        <DiscoverCarouselItem1Book img={books[0]?.volumeInfo?.imageLinks?.thumbnail} ></DiscoverCarouselItem1Book>
                        <DiscoverCarouselItem1Title>{books[0]?.volumeInfo?.title}</DiscoverCarouselItem1Title>
                        <DiscoverCarouselItem1Author>{(books[0]?.volumeInfo?.authors) ? books[0]?.volumeInfo?.authors[0] : ''}</DiscoverCarouselItem1Author>
                        <DiscoverCarouselItem1Count>120+ Read Now</DiscoverCarouselItem1Count>
                        <DiscoverCarouselItem1Svg>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.66667 11.3333V3.66665C2.66667 3.11436 3.11438 2.66665 3.66667 2.66665H12.3333C12.8856 2.66665 13.3333 3.11436 13.3333 3.66665V12.3333C13.3333 12.8856 12.8856 13.3333 12.3333 13.3333H3.33333C2.96514 13.3333 2.66667 13.6318 2.66667 14C2.66667 14.3682 2.96514 14.6666 3.33333 14.6666H12.3333C13.622 14.6666 14.6667 13.622 14.6667 12.3333V3.66665C14.6667 2.37798 13.622 1.33331 12.3333 1.33331H3.66667C2.378 1.33331 1.33333 2.37798 1.33333 3.66665V11.3333C1.33333 11.7015 1.63181 12 2 12C2.36819 12 2.66667 11.7015 2.66667 11.3333Z" fill="white" fillOpacity="0.653491" />
                                <path d="M4.33333 8.66667V10.6667C4.33333 11.0349 4.63181 11.3333 5 11.3333C5.36819 11.3333 5.66667 11.0349 5.66667 10.6667V8.66667C5.66667 8.29848 5.36819 8 5 8C4.63181 8 4.33333 8.29848 4.33333 8.66667Z" fill="#C8C8C8" />
                                <path d="M10.3333 7.33335V10.6667C10.3333 11.0349 10.6318 11.3334 11 11.3334C11.3682 11.3334 11.6667 11.0349 11.6667 10.6667V7.33335C11.6667 6.96516 11.3682 6.66669 11 6.66669C10.6318 6.66669 10.3333 6.96516 10.3333 7.33335Z" fill="#C8C8C8" />
                                <path d="M7.33333 5.33335V10.6667C7.33333 11.0349 7.63181 11.3334 8 11.3334C8.36819 11.3334 8.66667 11.0349 8.66667 10.6667V5.33335C8.66667 4.96516 8.36819 4.66669 8 4.66669C7.63181 4.66669 7.33333 4.96516 7.33333 5.33335Z" fill="#C8C8C8" />
                                <circle cx="11" cy="5.33335" r="0.666667" fill="#C8C8C8" />
                            </svg>
                        </DiscoverCarouselItem1Svg>
                    </DiscoverCarouselItem1>
                    <DiscoverCarouselItem2>
                        <DiscoverCarouselItem2Title>{books[1]?.volumeInfo?.title}</DiscoverCarouselItem2Title>
                        <DiscoverCarouselItem2Author>{(books[1]?.volumeInfo?.authors) ? books[1]?.volumeInfo?.authors[0] : ''}</DiscoverCarouselItem2Author>
                        <DiscoverCarouselItem2Count>120+ Read Now</DiscoverCarouselItem2Count>
                        <DiscoverCarouselItem2Svg>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.66667 11.3333V3.66665C2.66667 3.11436 3.11438 2.66665 3.66667 2.66665H12.3333C12.8856 2.66665 13.3333 3.11436 13.3333 3.66665V12.3333C13.3333 12.8856 12.8856 13.3333 12.3333 13.3333H3.33333C2.96514 13.3333 2.66667 13.6318 2.66667 14C2.66667 14.3682 2.96514 14.6666 3.33333 14.6666H12.3333C13.622 14.6666 14.6667 13.622 14.6667 12.3333V3.66665C14.6667 2.37798 13.622 1.33331 12.3333 1.33331H3.66667C2.378 1.33331 1.33333 2.37798 1.33333 3.66665V11.3333C1.33333 11.7015 1.63181 12 2 12C2.36819 12 2.66667 11.7015 2.66667 11.3333Z" fill="white" fillOpacity="0.653491" />
                                <path d="M4.33333 8.66667V10.6667C4.33333 11.0349 4.63181 11.3333 5 11.3333C5.36819 11.3333 5.66667 11.0349 5.66667 10.6667V8.66667C5.66667 8.29848 5.36819 8 5 8C4.63181 8 4.33333 8.29848 4.33333 8.66667Z" fill="#C8C8C8" />
                                <path d="M10.3333 7.33335V10.6667C10.3333 11.0349 10.6318 11.3334 11 11.3334C11.3682 11.3334 11.6667 11.0349 11.6667 10.6667V7.33335C11.6667 6.96516 11.3682 6.66669 11 6.66669C10.6318 6.66669 10.3333 6.96516 10.3333 7.33335Z" fill="#C8C8C8" />
                                <path d="M7.33333 5.33335V10.6667C7.33333 11.0349 7.63181 11.3334 8 11.3334C8.36819 11.3334 8.66667 11.0349 8.66667 10.6667V5.33335C8.66667 4.96516 8.36819 4.66669 8 4.66669C7.63181 4.66669 7.33333 4.96516 7.33333 5.33335Z" fill="#C8C8C8" />
                                <circle cx="11" cy="5.33335" r="0.666667" fill="#C8C8C8" />
                            </svg>
                        </DiscoverCarouselItem2Svg>
                    </DiscoverCarouselItem2>
                </DiscoverCarouselInner>
            </DiscoverCarousel>

            <SubTitle>
                <SubTitleText>Currently Reading</SubTitleText>
                <SubTitleLink>All</SubTitleLink>
            </SubTitle>

            <CurrentlyReading>
                <CurrentlyReadingImage img={books[2]?.volumeInfo?.imageLinks?.thumbnail} ></CurrentlyReadingImage>
                <CurrentlyReadingTitle>{books[2]?.volumeInfo?.title}</CurrentlyReadingTitle>
                <CurrentlyReadingAuthor>{(books[2]?.volumeInfo?.authors) ? books[2]?.volumeInfo?.authors[0] : ''}</CurrentlyReadingAuthor>
                <CurrentlyReadingCount>
                    <svg style={{ "marginBottom": "-4px", "marginRight": "4px;" }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.66666 8.00002C4.66666 8.51822 5.23198 8.83829 5.67633 8.57168L7 7.77748L8.32367 8.57168C8.76802 8.83829 9.33333 8.51822 9.33333 8.00002V1.33335C9.33333 0.965164 9.03485 0.666687 8.66666 0.666687H5.33333C4.96514 0.666687 4.66666 0.965164 4.66666 1.33335V8.00002ZM6.657 6.42836L6 6.82256V2.00002H8V6.82256L7.34299 6.42836C7.13187 6.30169 6.86812 6.30169 6.657 6.42836Z" fill="#E66CFF" fillOpacity="0.98" />
                        <path d="M3.33333 2.00002H10.6667C11.7712 2.00002 12.6667 2.89545 12.6667 4.00002V12C12.6667 13.1046 11.7712 14 10.6667 14H4C3.63181 14 3.33333 14.2985 3.33333 14.6667C3.33333 15.0349 3.63181 15.3334 4 15.3334H10.6667C12.5076 15.3334 14 13.841 14 12V4.00002C14 2.15907 12.5076 0.666687 10.6667 0.666687H2.66667C2.29848 0.666687 2 0.965164 2 1.33335V12C2 12.3682 2.29848 12.6667 2.66667 12.6667C3.03486 12.6667 3.33333 12.3682 3.33333 12V2.00002Z" fill="#9013FE" />
                        <circle cx="10.6667" cy="12" r="0.666667" fill="#FF9F00" />
                    </svg>
                            Chapter 2 From 9
                        </CurrentlyReadingCount>
            </CurrentlyReading>

            <SubTitle>
                <SubTitleText>Reviews of The Days</SubTitleText>
                <SubTitleLink>All Video</SubTitleLink>
            </SubTitle>

            <ReviewDayImage></ReviewDayImage>
        </HomeProvider>
    );
};

const Background = styled.div`
    background: #FFFCF9;
    width: 100%;
    height: 100%;
    position: absolute;
    padding-top: 50px;
    padding-bottom: 60px;
    box-sizing: border-box;
    font-family: SF Pro Display;
    overflow-x: hidden;
`;

const WelcomeText = styled.div`
    margin: 0px 20px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    color: #54565A;
    display: flex;
    margin-top: 30px;
    margin-bottom: 10px;
`;

const WelcomeTextBolder = styled.div`
    color: #fe6a78;
    margin-left: 5px;
`;

const WelcomeTextIcon = styled.div`
    background-image: url(/hi-icon.png);
    width: 50px;
    height: 25px;
    background-repeat: no-repeat;
    background-position: center;
`;

const SubTitle = styled.div`
     display: flex;
     justify-content: space-between;
     margin: 0px 20px;
     margin-top: 20px;
`;

const SubTitleText = styled.div`
    color: #3F4043;
    font-size: 18px;
`;

const SubTitleLink = styled.div`
    color: #4ABDF1;
    font-size: 14px;
    margin-top: 5px;
    cursor: pointer;
`;

const DiscoverCarousel = styled.div`
    width: 100%;
    height: 140px;
    margin: 0px 20px;
    margin-top: 15px;
`;

const DiscoverCarouselInner = styled.div`
    width: fit-content;
    height: 100%;
    display: flex;
`;

const DiscoverCarouselItem1 = styled.div`
    width: 250px;
    height: 100%;
    background-color: #00173D;
    margin-right: 10px;
    border-radius: 5px;
    background-image: url(/oval-1.png),url(/oval-2.png);
    background-repeat: no-repeat;
    background-position: left bottom,122px 20px;
    position: relative;
`;

const DiscoverCarouselItem1Title = styled.div`
    font-family: Playfair Display;
    color: #FEFEFE;
    font-style: normal;
    font-size: 27px;
    position: absolute;
    left: 15px;
    top: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 145px;
`;

const DiscoverCarouselItem1Author = styled.div`
    font-family: Playfair Display;
    color: #FEFEFE;
    font-style: italic;
    font-size: 14px;
    position: absolute;
    left: 15px;
    top: 55px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 145px;
`;

const DiscoverCarouselItem1Count = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    color: #FEFEFE;
    font-size: 10px;
    position: absolute;
    left: 34px;
    top: 107px;
`;

const DiscoverCarouselItem1Svg = styled.div`
    position: absolute;
    left: 15px;
    top: 105px;
`;

const DiscoverCarouselItem1Book = styled.div`
    position: absolute;
    left: 115px;
    top: 0px;
    background: url(/triangle.png),url(/rectangle.png), ${props => `url(${props.img})`};
    width: 160px;
    height: 145px;
    background-position: 35px 3px,22px 90px,center 14px;
    background-size: auto,auto,72px 112px;
    background-repeat: no-repeat;
    border-radius: 5px;
`;

const DiscoverCarouselItem2 = styled.div`
    width: 250px;
    height: 130px;
    background-color: #451475;
    margin-right: 10px;
    border-radius: 5px;
    margin-top: 5px;
    position: relative;
`;

const DiscoverCarouselItem2Title = styled.div`
    font-family: Playfair Display;
    color: #FEFEFE;
    font-style: normal;
    font-size: 27px;
    position: absolute;
    left: 15px;
    top: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 145px;
`;

const DiscoverCarouselItem2Author = styled.div`
    font-family: Playfair Display;
    color: #FEFEFE;
    font-style: italic;
    font-size: 14px;
    position: absolute;
    left: 15px;
    top: 55px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 145px;
`;

const DiscoverCarouselItem2Count = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    color: #FEFEFE;
    font-size: 10px;
    position: absolute;
    left: 34px;
    top: 100px;
`;

const DiscoverCarouselItem2Svg = styled.div`
    position: absolute;
    left: 15px;
    top: 98px;
`;

const ReviewDayImage = styled.div`
    background-image: url(/ReviewDayImage.jpg);
    height: 170px;
    border-radius: 5px;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    margin: 0px 20px;
    margin-top: 15px;
    cursor: pointer;
    margin-bottom: 20px;
    box-sizing: border-box;
`;

const CurrentlyReading = styled.div`
    height: 170px;
    width: 100%;
    background-image: url(/oval-4.png),url(/oval-2.png),url(/rectangle.png),url(/rectangle-currently-reading.png);
    background-position: 330px 7px,260px 23px,349px 108px,center left;
    background-repeat: no-repeat;
    background-size: auto,auto,auto,100% 190px;
    position: relative;
`;

const CurrentlyReadingImage = styled.div`
    position: absolute;
    width: 91px;
    height: 136px;
    left: 19px;
    top: 15px;
    background: ${props => `url(${props.img})`};
    border-radius: 1px;
`;

const CurrentlyReadingTitle = styled.div`
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 2px;
    color: #2A2B26;
    left: 125px;
    top: 40px;
    position: absolute;
    max-width: 200px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const CurrentlyReadingAuthor = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #74776D;
    left: 125px;
    top: 75px;
    position: absolute;
`;

const CurrentlyReadingCount = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #2A2B26;
    left: 125px;
    top: 105px;
    position: absolute;
`;


export default Home;

