import { user } from '../utils/index';
import Bell from '../assets/bell-icon.png';
import More from '../assets/More.png';

const UserNav = () => {
  // im just going to pretend that this is a reusable component of users and
  // im rendering it and destructure it and so on
  const { username, notifications, image, role, id } = user;

  return (
    <div className="user-nav gap-x-5" key={id}>
      <div className="bell-icon-container">
        <button className="flex items-center">
          <img
            src={Bell}
            alt="bell icon contain notification number"
          />
          <span>{notifications}</span>
        </button>
      </div>
      <div className="profile-image-container">
        <img src={image} alt="user profile pic" />
      </div>
      <div className="user-info flex flex-col">
        <h6>{username}</h6>
        <p>{role}</p>
      </div>
      <div className="more-options">
        <button>
          <img src={More} alt="more options button" />
        </button>
      </div>
    </div>
  );
};

export default UserNav;
