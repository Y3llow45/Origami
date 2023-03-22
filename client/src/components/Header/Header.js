import style from './Header.module.css';
import NavigationItem from './NavigationItem';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className="listItem"><img src="/white-origami-bird.png" alt="white origami" /></li>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/"><NavigationItem>Home</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about"><NavigationItem>About</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/contact-us"><NavigationItem>Contact Us</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/pier"><NavigationItem>Pesho</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/toto"><NavigationItem>Going to 5</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/chefo"><NavigationItem>Going to 6</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/do"><NavigationItem>Going to 7</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/xi"><NavigationItem>Going to 8</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/typescript"><NavigationItem>Going to 9</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/dino"><NavigationItem>Going to 10</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/liam"><NavigationItem>Going to 11</NavigationItem></NavLink>
            </ul>
        </nav>
    );
};

export default Header;