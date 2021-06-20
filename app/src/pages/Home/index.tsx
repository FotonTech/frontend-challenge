import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

import graphic from '../../assets/graphic.png'
import triangle from '../../assets/triangle.png';
import circle from '../../assets/circle.png';
import rectangle from '../../assets/rectangle.png';

import NavBar from '../../components/NavBar';
import SearchInput from '../../components/SearchInput';

interface IBook {
    title: string,
    imageLinks: {
        thumbnail: string;
    }
}

const Home = () => {
    // const history = useHistory();
    const [book, setBook] = useState<IBook>({
        title: '',
        imageLinks: {
            thumbnail:''
        }
    } as IBook);

    const getBook = async () => {
        const res = await api.get(`/volumes?q=Naruto`);
        setBook(res.data.items[9].volumeInfo);
        console.log(res.data);
    }


    useEffect(() => {
        getBook();
    }, [])

    return (
        <section className='mainContainer'>
            <NavBar />
            <SearchInput />
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
                <div className='card'>
                    <img src={triangle} alt="" className='triangleCardImg' />
                    <img src={circle} alt="" className='circleCardImg' />
                    <img src={rectangle} alt="" className='rectangleCardImg' />

                    <section className='cardContentContainer'>
                        <section className='cardTextContainer'>
                            <section className='cardTitleContainer'>
                                <div className='cardTitle'>
                                    {book.title}
                                </div>
                                <div className='cardAuthor'>
                                    Masashi
                                </div>
                            </section>
                            <div className='graphicTextContainer'>
                                <img src={graphic} alt="graphic" className='graphicImg' />
                                <strong>120+</strong>
                                Read Now
                            </div>
                        </section>
                        <img src={book.imageLinks.thumbnail} alt="" />
                    </section>
                </div>

                <div className='card'>
                    <img src={triangle} alt="" className='triangleCardImg' />
                    <img src={circle} alt="" className='circleCardImg' />
                    <img src={rectangle} alt="" className='rectangleCardImg' />

                    <section className='cardContentContainer'>
                        <section className='cardTextContainer'>
                            <section className='cardTitleContainer'>
                                <div className='cardTitle'>
                                    Naruto
                                </div>
                                <div className='cardAuthor'>
                                    Masashi
                                </div>
                            </section>
                            <div className='graphicTextContainer'>
                                <img src={graphic} alt="graphic" className='graphicImg' />
                                <strong>120+</strong>
                                Read Now
                            </div>
                        </section>
                        <img src={book.imageLinks.thumbnail} alt="" />
                    </section>
                </div>
               
            </section>
            {/* <div onClick={() => history.push('/Detail', {
                book: book as unknown as string
            })}>
                Clique aqui
            </div> */}
        </section>
    )
}

export default Home;
