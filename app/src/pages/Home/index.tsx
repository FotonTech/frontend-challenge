import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

import graphic from '../../assets/graphic.png'
import triangle from '../../assets/triangle.png';
import circle from '../../assets/circle.png';
import rectangle from '../../assets/rectangle.png';
import chapters from '../../assets/chapters.png';
import Oval from '../../assets/Oval.png';

import NavBar from '../../components/NavBar';
import SearchInput from '../../components/SearchInput';
import SearchBooks from '../../components/SearchBooks';
import Loading from '../../components/Loading';

interface IBook {
    volumeInfo: {
        imageLinks: {
            thumbnail: string
        };
        authors: string[];
        title: string;
        subtitle: string;
        description: string;
        previewLink: string;
    };
    searchInfor: {
        textSnippet: string;
    };
    id: string;
}

interface ICardBooks {
    data: {
        volumeInfo: {
            imageLinks: {
                thumbnail: string
            };
            authors: string[];
            title: string;
            subtitle: string;
            description: string;
            previewLink: string;
        };
        searchInfor: {
            textSnippet: string;
        };
        id: string;
    };
    color: string;
}

const Home = () => {
    const history = useHistory();
    const [book, setBook] = useState<IBook>({
        volumeInfo: {
            imageLinks: {
                thumbnail: ''
            },
            authors: [''],
            title: '',
            subtitle: '',
            description: '',
            previewLink: ''
        },
        searchInfor: {
            textSnippet: ''
        },
        id: ''
    });
    const [searchBooks, setSearchBooks] = useState<IBook[]>([]);
    const [cardBooks, setCardBooks] = useState<ICardBooks[]>([]);


    const [search, setSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSearchingLoading, setIsSearchingLoading] = useState(false);

    const getCardBook = async () => {
        const res = [
            {
                data: (await api.get('/volumes/dsz5AwAAQBAJ')).data,
                color: '#00173d'
            },
            {
                data: (await api.get('/volumes/noEgTcv5XZcC')).data,
                color: '#451475'
            },
            {
                data: (await api.get('/volumes/u5UQEAAAQBAJ')).data,
                color: '#3F4043'
            }
        ];
        const response = await api.get(`/volumes/eLRhDgAAQBAJ`);
        setBook(response.data);
        setCardBooks(res);
        setIsLoading(false)
    }

    const getBooks = async () => {
        setIsSearchingLoading(true);
        if (search) {
            const res = await api.get(`/volumes?q=${search}&maxResults=40`);
            if (res) {
                setSearchBooks(res.data.items);
            }
        }
        setIsSearchingLoading(false);
    }

    const pushHistory = (data: {
        volumeInfo:
        {
            imageLinks: {
                thumbnail: string;
            };
            authors: string[];
            title: string;
        };
        searchInfor: {
            textSnippet: string;
        };
        id: string;
    }) => {
        history.push('/Detail', {
            book: data
        })
    }

    const handleSearch = () => {
        if (search) {
            setIsSearching(true);
        } else {
            setIsSearching(false);
        }
    }

    useEffect(() => {
        getCardBook();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getBooks()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    return (
        <section className={isSearching ? 'mainContainerSearch' : 'mainContainer'}>
            {
                isLoading ? (
                    <>
                        <Loading />
                    </>
                ) : (
                    <>
                        <NavBar homeOnClick={() => setSearch('')} />
                        <SearchInput text={search} onChange={(e) => setSearch(e.target.value)} handleSearch={handleSearch} />

                        {
                            isSearching ? (
                                <SearchBooks
                                    items={searchBooks}
                                    isLoading={isSearchingLoading}
                                />
                            ) : (
                                <>
                                    <section className='userTitleContainer'>
                                        <div>
                                            Hi,
                                        </div>
                                        <div className='userTitleName'>
                                            Sabanai 👋
                                        </div>
                                    </section>
                                    <section className='subTitleContainer'>
                                        <div>Discover new book </div>
                                        <div className='subTitleSecondText'>More</div>
                                    </section>

                                    <section className='bookCardContainer'>
                                        {
                                            cardBooks.map(({ data, color }) => {
                                                return (
                                                    <section className='card' style={{ background: color, }} key={data.id} onClick={() => pushHistory(data)}>
                                                        <img src={triangle} alt=" " className='triangleCardImg' />
                                                        <img src={circle} alt=" " className='circleCardImg' />
                                                        <img src={rectangle} alt=" " className='rectangleCardImg' />
                                                        <img src={Oval} alt="" className='ovalCardImg' />
                                                        <section className='cardContentContainer'>
                                                            <section className='cardTextContainer'>
                                                                <section className='cardTitleContainer'>
                                                                    <div className='cardTitle' >
                                                                        {data.volumeInfo.title}
                                                                    </div>
                                                                    <div className='cardAuthor'>
                                                                        {data.volumeInfo?.authors[0]}
                                                                    </div>
                                                                </section>
                                                                <div className='graphicTextContainer'>
                                                                    <img src={graphic} alt="graphic" className='graphicImg' />
                                                                    <strong style={{marginRight: '0.2rem'}}>120+</strong>
                                                                    Read Now
                                                                </div>
                                                            </section>
                                                            <img src={data.volumeInfo?.imageLinks.thumbnail} alt="" />
                                                        </section>
                                                    </section>
                                                )
                                            })
                                        }

                                    </section>

                                    <section className='subTitleContainer'>
                                        <div>Currently Reading</div>
                                        <div className='subTitleSecondText'>All</div>
                                    </section>

                                    <section className='currentlyReadingContainer' >
                                        <section className='currentlyReadingInfoContainer' onClick={() => pushHistory(book)}>
                                            <img src={book.volumeInfo.imageLinks.thumbnail} alt='book' className='currentlyReadingImg' />
                                            <section className='currentlyReadingTextContainer'>
                                                <section>
                                                    <div className='currentlyReadingBookTitle'>
                                                        {book.volumeInfo.title}
                                                    </div>
                                                    <div className='currentlyReadingBookAuthor'>
                                                        {book.volumeInfo.authors[0]}
                                                    </div>
                                                </section>
                                                <section className='currentlyReadingChaptersContainer'>
                                                    <img src={chapters} alt=' ' />
                                                    <div className='currentlyReadingChaptersText'>
                                                        Chapter <div className='currentlyReadingChaptersNumber'>2</div> from 9
                                                    </div>
                                                </section>
                                            </section>
                                        </section>
                                    </section>

                                    <section className='subTitleContainer'>
                                        <div>Reviews of The Days</div>
                                        <div className='subTitleSecondText'>All Video</div>
                                    </section>

                                    <section className='videosContainer'>
                                        <section className='thumbnailImg'>
                                            <img
                                                src="https://i.ytimg.com/vi/vBzBgewl4ac/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4QuHiW8ShUUSPpZTgTvRSzF9U2g"
                                                className='thumbnailContainer'
                                                alt=' '
                                                onClick={() => window.open("https://www.youtube.com/watch?v=vBzBgewl4ac", "_blank")}
                                            />
                                        </section>

                                        <section className='thumbnailImg'>
                                            <img
                                                src="https://i.ytimg.com/vi/9gWR76lJFGs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkwzpo0gLI5fadk0dqgdLhDy3Xsg"
                                                className='thumbnailContainer'
                                                alt=' '
                                                onClick={() => window.open("https://www.youtube.com/watch?v=9gWR76lJFGs", "_blank")}
                                            />
                                        </section>

                                        <section className='thumbnailImg'>
                                            <img
                                                src="https://i.ytimg.com/vi/cWFBoPcWpDo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAr7gnipUlSMX-3kRYFe8D0bacLkQ"
                                                className='thumbnailContainer'
                                                alt=' '
                                                onClick={() => window.open("https://www.youtube.com/watch?v=cWFBoPcWpDo", "_blank")}
                                            />
                                        </section>
                                    </section>
                                </>
                            )
                        }
                    </>
                )
            }
        </section>
    )
}

export default Home;
