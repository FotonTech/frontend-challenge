import { useHistory } from "react-router-dom";
import './style.css';


import Back from '../../assets/Back.png';
import bookOpen from '../../assets/book-open.png';
import headphones from '../../assets/headphones.png';
import share from '../../assets/share.png';

const Detail = () => {
    const history: any = useHistory();
    const book = history.location.state.book;

    return (
        <section className='detailPageContainer'>
            <section className='detailNavbar'>
                <div className='detailNavbarRead'>
                    <img src={bookOpen} alt="" style={{ marginRight: '0.625rem' }} />
                    Read
                </div>
                <div className='detailNavbarListen'>
                    <img src={headphones} alt="" style={{ marginRight: '0.625rem', marginBottom:'0.3rem' }} />
                    Listen
                </div>
                <div className='detailNavbarShare'>
                    <img src={share} alt="" style={{ marginRight: '0.625rem', marginBottom:'0.3rem'}} />
                    Share
                </div>
            </section>
            <section className='firstBackgroundContainer'>
                <img src={Back} alt="" className='backArrow' onClick={() => history.goBack()} />
                <img src={book.volumeInfo.imageLinks.thumbnail} alt=" bookImage" className='bookImg' />
            </section>

            <section className='bookInfoContainer'>
                <section className='bookAuthorInfoContainer'>
                    <section className='bookNameTextContainer'>
                        <strong>{book.volumeInfo.title}:</strong> {book.volumeInfo.subtitle}
                    </section>
                </section>
                <div className='authorText' onClick={() => console.log(book)}>
                    {book.volumeInfo.authors[0]}
                </div>

                <div className='bookTextSnippets' dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }} />
            </section>
        </section>
    )
}

export default Detail;