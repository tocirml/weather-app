import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="logo-link">
        <div className="app-name">WEATHER APP</div>
        <img src={logo} alt="weather-app-logo" />
      </NavLink>
    </header>
  );
};

export default Header;
