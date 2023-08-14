import Logo from './Logo';
import Search from './Search';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 mt-2 px-6">
      <Logo />
      <div className="flex gap-2 items-center">
        <Search />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavBar;
