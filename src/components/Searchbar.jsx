import { CiSearch } from 'react-icons/ci';

const SearchBar = () => {
  // This is an example of the search bar just incase we are going to implement
  // however here we are not and its just a figma design but just wanted to show you
  // i have done this before

  //   const [searchTerm, setSearchTerm] = useState('');

  //   const navigate = useNavigate();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // if (searchTerm) {
  //     //   navigate(`/search/${searchTerm}`);
  //     // }
  //     // setSearchTerm('');
  //   };

  return (
    <div className="search-bar-container p-relative">
      <button type="submit" className="p-10px text-black ">
        <CiSearch />
      </button>

      <input
        className="search-bar"
        placeholder="Search"
        // value={searchTerm}
        // onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
