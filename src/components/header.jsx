import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { PiFilmReel } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { useTheme } from "./ThemeContext";
import SearchBar from "./search/SearchBar";

function Header({ query, setQuery, onSearch }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const isDetailsPage = location.pathname.startsWith("/details/");
  const isSearchPage = location.pathname.startsWith("/search");

  const handleBack = () => navigate(-1);

  return (
    <header
      className={`header__container ${
        isDetailsPage ? "header__container--details" : ""
      }`}
    >
      {isDetailsPage ? (
        <button
          className="header__back-button"
          onClick={handleBack}
          aria-label="Go back"
        >
          <HiOutlineArrowLongLeft />
        </button>
      ) : isSearchPage ? (
        <button
          className="header__back-button"
          onClick={handleBack}
          aria-label="Go back"
        >
          <HiOutlineArrowLongLeft />
        </button>
      ) : null}

      {isSearchPage && (
        <SearchBar query={query} setQuery={setQuery} onSearch={onSearch} />
      )}

      {!isSearchPage && !isDetailsPage && (
        <h1 className="header__title">MyMovies</h1>
      )}

      {/* Nav links inside header — desktop only */}
      <ul className="header__nav-list">
        <li>
          <Link
            to="/search"
            className={
              location.pathname.startsWith("/search")
                ? "header__nav-link primary"
                : "header__nav-link"
            }
          >
            <IoSearch className="nav-icon" />
            <span>Search</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "header__nav-link primary"
                : "header__nav-link"
            }
          >
            <PiFilmReel className="nav-icon" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/watchlist"
            className={
              location.pathname === "/watchlist"
                ? "header__nav-link primary"
                : "header__nav-link"
            }
          >
            <BsBookmark className="nav-icon" />
            <span>Watchlist</span>
          </Link>
        </li>
      </ul>

      <div className="header__switch-container">
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </header>
  );
}

export default Header;
