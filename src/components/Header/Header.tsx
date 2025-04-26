import './Header.scss';
import logo from '../../assets/Alnsr Aldahabi Tyre Trading Logo- White.png';
const Header = () => {
  return (
    <header className="header">
      <div className="header__center">
        <img src={logo} alt="Alnasser Logo" className="logo large" />
      </div>
    </header>
  );
};

export default Header; 