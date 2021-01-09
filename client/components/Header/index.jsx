import Logo from '../Logo';
import Menu from '../Menu';

const Header = () => (
  <div className="h-16 border-b-2 border-main flex items-center px-6">
    <Logo />
    <Menu />
  </div>
);

export default Header;
