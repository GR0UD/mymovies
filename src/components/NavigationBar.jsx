import { PiFilmReel } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";

function Nav({ currentPath }) {
  const getNavLinkClass = (path) => {
    return currentPath === path ? "nav-link primary" : "nav-link";
  };

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/search" className={getNavLinkClass("/search")}>
            <IoSearch className="nav-icon" />
            <span className="nav-label">Search</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className={getNavLinkClass("/")}>
            <PiFilmReel className="nav-icon" />
            <span className="nav-label">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/watchlist" className={getNavLinkClass("/watchlist")}>
            <BsBookmark className="nav-icon" />
            <span className="nav-label">Watchlist</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
