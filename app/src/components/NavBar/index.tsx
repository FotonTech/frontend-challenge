import './style.css'

import home from '../../assets/home.png';
import book from '../../assets/book.png';
import user from '../../assets/user.png';

const NavBar = () => {
    return (
        <section className='navMainContainer'>
            <div className='navIconsContainer'>
                <div className='iconContainer'>
                    <img src={home} alt="Home" />
                    <div className='iconText'>Home</div>
                </div>

                <div className='iconContainer'>
                    <img src={book} alt="Libraries" />
                    <div className='iconText'>Libraries</div>
                </div>

                <div className='iconContainer'>
                    <img src={user} alt="Profile" />
                    <div className='iconText'>Profile</div>
                </div>            </div>
        </section>
    );
}

export default NavBar;