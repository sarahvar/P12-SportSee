import { NavLink } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
    return (
        <main className='main-container'>
            <div className='user-wrapper'>
                <h1 className='user-heading'>Choose your user</h1>
                <NavLink to='/user/12' className='user-item'>Pierre-Mock</NavLink>
                <NavLink to='/user/18' className='user-item'>MockTar</NavLink>
            </div>
        </main>
    );
}

export default HomePage;
