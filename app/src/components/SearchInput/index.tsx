import './style.css';

import search from '../../assets/search.png';

const SearchInput = () => {
    return (
        <section className='searchContainer'>
            <img src={search} alt="search" className='searchImg' />
            <input type="text" placeholder='Search book' className='searchInput'/>
        </section>
    );
}

export default SearchInput;