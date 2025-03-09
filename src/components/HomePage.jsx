import Navbar from './Navbar.jsx';
import home_pic from '../assets/images/craig-whitehead-SuJp8ZpkubI-unsplash.jpg';
import '../styles/HomePage.css';

function HomePage() {
    return (
        <div>
            <Navbar />
            <img className='home-page-image' src={home_pic} />
        </div>
    )  
};

export default HomePage;