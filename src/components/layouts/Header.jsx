import { NavLink } from 'react-router-dom';

const Header = () => {

	return (
        <header>
            <h1>Header</h1>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;
