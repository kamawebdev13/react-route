import { Link } from 'react-router-dom';
import userIcon from '../../../assets/images/user-icon.webp';


const Header = () => {
  return (
    <header className="w-full bg-white relative z-50 shadow-sm">
      <nav className="max-w-242.5 mx-auto flex items-center justify-between py-s-sm px-4 md:px-8">
        <ul className="flex items-center gap-6 md:gap-12">
          <li>
            <Link to="/" className="text-link-md font-medium text-c-text-two hover:text-c-active-three transition-colors">HOME</Link>
          </li>
          <li>
            <Link to="/Games" className="text-link-md font-medium text-c-text-two hover:text-c-active-three transition-colors">GAMES</Link>
          </li>
          <li>
            <Link to="/Grammar" className="text-link-md font-medium text-c-text-two hover:text-c-active-three transition-colors">GRAMMAR</Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 shrink-0">
            <img src={userIcon} alt="user" className="w-full h-full object-contain" />
          </div>
          <span className="text-h-xs text-c-text hidden md:block">UserName</span>
          <button className="bg-c-active-one text-white px-4 py-1.5 rounded-xl shadow-btn-sm hover:scale-105 hover:bg-c-hover transition-all cursor-pointer">
            LOGIN/SIGN UP
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;