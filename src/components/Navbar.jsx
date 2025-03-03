import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({className='Navbar'}) {
    return (
        <div className={className}>
            <Link to='/' style={{textDecoration: 'none'}}>
                Home
            </Link>
            <Link to='/localweather' style={{textDecoration: 'none'}}>
                Local Weather
            </Link>
            <Link to='/about' style={{textDecoration: 'none'}}>
                About
            </Link>
        </div>
    )
}

export default Navbar;