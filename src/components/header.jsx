import React from "react";
import { useLocation, Link } from "react-router-dom";
import { TbMenu3 } from "react-icons/tb";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { useTheme } from "./ThemeContext";

function Header() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme(); // Use the theme from context

  const isDetailsPage = location.pathname.startsWith("/details/");

  return (
    <header
      className={`header__container ${
        isDetailsPage ? "header__container--details" : ""
      }`}
    >
      {isDetailsPage ? (
        <Link className="header__back-button" to="/">
          <HiOutlineArrowLongLeft />
        </Link>
      ) : (
        <button className="header__back-button">
          <TbMenu3 />
        </button>
      )}
      <h1 className="header__title">MyMovies</h1>
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
