import { useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import noImage from '../../assets/noImage.jpg';

import Loading from '../Loading';

interface IBook {
    volumeInfo: {
        imageLinks: {
            thumbnail: string
        };
        authors: string[];
        title: string;
        subtitle: string;
        description: string;
    };
    searchInfor: {
        textSnippet: string;
    };
    id: string;
}


const SearchBook = ({ items, isLoading }: {
    items: IBook[],
    isLoading: boolean,
}) => {
    const history = useHistory();
    const observer = useRef<any>();
    const [indexNumber, setIndexNumber] = useState(9);

    const lastBookElement = useCallback((node) => {
        if (observer.current)
            observer.current?.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setTimeout(() => setIndexNumber(indexNumber => indexNumber + 10), 500);
            }
        });

        if (node)
            observer.current.observe(node);
    }, [])

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

    return (
        <section className={isLoading ? 'loadingContainer' : 'searchBooksContainer'}>
            {
                isLoading ? (
                    <>
                        <Loading />
                    </>
                ) : (
                    <>
                        {
                            items?.map((item, index) => {
                                if (index <= indexNumber) {
                                    if (index === indexNumber) {
                                        return (
                                            <section ref={lastBookElement} key={item.id} className='bookContainer' onClick={() => pushHistory(item)}>
                                                <img src={item.volumeInfo?.imageLinks?.thumbnail ? item.volumeInfo?.imageLinks?.thumbnail : noImage} alt="" className='bookImage' />
                                                <div className='bookTitle'>
                                                    {item.volumeInfo?.title}
                                                </div>
                                                <div className='bookAuthor'>
                                                    by
                                                    {
                                                        item.volumeInfo.authors ? (" " + item.volumeInfo.authors[0]) : (' Non identified')
                                                    }
                                                </div>
                                            </section>
                                        )
                                    } else {
                                        return (
                                            <section key={item.id} className='bookContainer' onClick={() => pushHistory(item)}>
                                                <img src={item.volumeInfo?.imageLinks?.thumbnail ? item.volumeInfo?.imageLinks?.thumbnail : noImage} alt="" className='bookImage' />
                                                <div className='bookTitle'>
                                                    {item.volumeInfo?.title}
                                                </div>
                                                <div className='bookAuthor'>
                                                    by
                                                    {
                                                        item.volumeInfo.authors ? (" " + item.volumeInfo.authors[0]) : (' Non identified')
                                                    }
                                                </div>
                                            </section>
                                        )
                                    }
                                } else {
                                    return null
                                }
                            })
                        }
                    </>
                )
            }
        </section>
    );
}

export default SearchBook;
