import { NavLink } from 'react-router-dom';
import './Home.css';
const HomePage = () => {
    return (
        <main className='home'>
            <div className='home__user'>
                <h1 className='home__user__title'>Select your user</h1>
                <NavLink to='/user/12' className='home__user__linkUser'>Karl</NavLink>
                <NavLink to='/user/18' className='home__user__linkUser'>Cecilia</NavLink>
            </div>
        </main>
    );
}

export default HomePage;
