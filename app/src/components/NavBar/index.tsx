import './style.css'

import home from '../../assets/home.png';
import book from '../../assets/book.png';
import user from '../../assets/user.png';
import { FC } from 'react';

interface INavBar {
    homeOnClick: VoidFunction
}

const NavBar: FC<INavBar> = ({homeOnClick}) => {
    return (
        <section className='navMainContainer'>
            <div className='navIconsContainer'>
                <div className='iconContainer' onClick={homeOnClick}>
                    <img src={home} className='navIconimg' alt="Home" />
                    <div className='iconText'>Home</div>
                </div>

                <div className='iconContainer'>
                    <img src={book} className='navIconimg' alt="Libraries" />
                    <div className='iconText'>Libraries</div>
                </div>

                <div className='iconContainer'>
                    <img src={user} className='navIconimg' alt="Profile" />
                    <div className='iconText'>Profile</div>
                </div>            </div>
        </section>
    );
}

export default NavBar;