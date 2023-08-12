import Logo from './Logo';
import Search from './Search';

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 mt-2 px-6">
      <Logo />
      <div className="flex-none gap-2">
        <Search />
      </div>
    </div>
  );
};

export default NavBar;
