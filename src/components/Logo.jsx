import { Link } from 'react-router-dom';
import LogoIcon from '/assets/street suite logo-04.png';

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo-container">
        <img src={LogoIcon} alt="Street Suite Logo" />
      </div>
    </Link>
  );
};

export default Logo;
