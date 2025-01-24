import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TbMenu3 } from "react-icons/tb";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { useTheme } from "./ThemeContext";
import SearchBar from "./search/SearchBar";

function Header({ query, setQuery, onSearch }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const isDetailsPage = location.pathname.startsWith("/details/");
  const isSearchPage = location.pathname.startsWith("/search");

  const handleHomeClick = () => navigate("/");

  return (
    <header
      className={`header__container ${
        isDetailsPage ? "header__container--details" : ""
      }`}
    >
      {isDetailsPage || isSearchPage ? (
        <button
          className="header__back-button"
          onClick={handleHomeClick}
          aria-label="Go back to Home"
        >
          <HiOutlineArrowLongLeft />
        </button>
      ) : (
        <button className="header__menu-button" aria-label="Open Menu">
          <TbMenu3 />
        </button>
      )}

      {isSearchPage && (
        <SearchBar query={query} setQuery={setQuery} onSearch={onSearch} />
      )}

      {!isSearchPage && !isDetailsPage && (
        <h1 className="header__title">MyMovies</h1>
      )}

      {(!isSearchPage || isDetailsPage) && (
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
      )}
    </header>
  );
}

export default Header;
