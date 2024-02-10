import Logo from './Logo';
import SearchBar from './Searchbar';
import UserNav from './UserNav';

const Navbar = () => {
  return (
    <nav className="flex align-center py-3 justify-between">
      <Logo />
      <div className="nav-right-side me-4">
        <SearchBar />
        <UserNav />
      </div>
    </nav>
  );
};

export default Navbar;
