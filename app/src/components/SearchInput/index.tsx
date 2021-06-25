import { FC, useEffect } from "react";
import './style.css';

import search from '../../assets/search.png';

interface ISearch {
    text: string;
    onChange(
        e:
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLSelectElement>
            | React.ChangeEvent<HTMLInputElement>,
    ): void;
    handleSearch: VoidFunction;
}
const SearchInput: FC<ISearch> = ({ text, onChange, handleSearch }) => {
    useEffect(() => {
        handleSearch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    return (
        <section className='searchContainer'>
            <img src={search} alt="search" className='searchImg' />
            <input type="text" value={text} onChange={onChange} placeholder='Search book' className='searchInput' />
        </section>
    );
}

export default SearchInput;