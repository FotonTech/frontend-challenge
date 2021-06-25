import { useHistory } from "react-router-dom";
import './style.css';


import Back from '../../assets/Back.png';
import bookOpen from '../../assets/book-open.png';
import headphones from '../../assets/headphones.png';
import share from '../../assets/share.png';

const Detail = () => {
    const history: any = useHistory();
    const book = history.location.state.book;

    const mensagem = 'Atualmente estou lendo '
    const link = book.volumeInfo.title + ' ' + book.volumeInfo.previewLink
    return (
        <section className='detailPageContainer'>
            <section className='detailNavbar'>
                <div className='detailNavbarRead' onClick={() => window.open(book.volumeInfo.previewLink, "_blank")}>
                    <img src={bookOpen} alt="" style={{ marginRight: '0.625rem' }} />
                    Read
                </div>
                <div className='detailNavbarListen' onClick={
                    () => window.open(`https://www.audible.com/ep/freetrial?source_code=GO1GBSH06281690BH&device=d&cvosrc=ppc.google.audio%20books&cvo_campaign=621253426&cvo_crid=462610066488&Matchtype=e&ds_rl=1262685&ds_rl=1257031&ds_rl=1261256&gclid=Cj0KCQjw_dWGBhDAARIsAMcYuJyqmzKBLBhBECuO4sg-BLE-OMvfXj0e1ntLt3SibRqzmvhQfXjVxIkaAsmlEALw_wcB&gclsrc=aw.ds`, '_blank')
                }>
                    <img src={headphones} alt="" style={{ marginRight: '0.625rem', marginBottom: '0.3rem' }} />
                    Listen
                </div>
                <div className='detailNavbarShare' onClick={() => window.open(`https://twitter.com/share?url=${link}&text=${mensagem}`, '_blank')}>
                    <img src={share} alt="" style={{ marginRight: '0.625rem', marginBottom: '0.3rem' }} />
                    Share
                </div>
            </section>
            <section className='firstBackgroundContainer'>
                <img src={Back} alt="" className='backArrow' onClick={() => history.goBack()} />
                <img src={book.volumeInfo.imageLinks?.thumbnail ? book.volumeInfo.imageLinks.thumbnail : null} alt=" bookImage" className='bookImg' />
            </section>

            <section className='bookInfoContainer'>
                <section className='bookAuthorInfoContainer'>
                    <section className='bookNameTextContainer'>
                        <strong>{book.volumeInfo.title}:</strong> {book.volumeInfo.subtitle}
                    </section>
                </section>
                <div className='authorText' >
                    {book.volumeInfo?.authors ? book.volumeInfo.authors[0] : null}
                </div>

                <div className='bookTextSnippets' dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }} />
            </section>
        </section>
    )
}

export default Detail;