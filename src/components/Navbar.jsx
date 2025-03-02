import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({className='Navbar'}) {
    return (
        <div className={className}>
            <Link to='/' style={{textDecoration: 'none'}}>
                <div>Home</div>
            </Link>
            <Link to='/some' style={{textDecoration: 'none'}}>
                <div>Some</div>
            </Link>
        </div>
    )
}

export default Navbar;