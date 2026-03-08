import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaStar, FaBookmark } from "react-icons/fa";
import Header from "../components/header";
import Nav from "../components/NavigationBar";
import { useWatchlist } from "../contexts/WatchlistContext";

const Watchlist = () => {
  const location = useLocation();
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  if (watchlist.length === 0) {
    return (
      <>
        <main>
          <Header />
          <div className="watchlist-container">
            <div className="watchlist-container__header">
              <h2 className="watchlist-container__title">My Watchlist</h2>
            </div>
            <div className="watchlist-container__empty">
              <p>Your watchlist is empty. Start adding movies!</p>
              <Link to="/" className="watchlist-container__link">
                Explore Movies
              </Link>
            </div>
          </div>
        </main>
        <Nav currentPath={location.pathname} />
      </>
    );
  }

  return (
    <>
      <main>
        <Header />
        <div className="watchlist-container">
          <div className="watchlist-container__header">
            <h2 className="watchlist-container__title">My Watchlist</h2>
            <span className="watchlist-container__count">
              {watchlist.length} {watchlist.length === 1 ? "movie" : "movies"}
            </span>
          </div>

          <ul className="watchlist-container__list">
            {watchlist.map((movie) => (
              <li key={movie.id} className="watchlist-container__item">
                <div className="watchlist-container__image-wrapper">
                  <Link
                    className="watchlist-container__link"
                    to={`/details/film/${movie.id}`}
                  >
                    <img
                      className="watchlist-container__image"
                      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </Link>
                </div>
                <div className="watchlist-container__details">
                  <Link
                    className="watchlist-container__link"
                    to={`/details/film/${movie.id}`}
                  >
                    <h3 className="watchlist-container__movie-title">
                      {movie.title}
                    </h3>
                  </Link>
                  <span className="watchlist-container__rating">
                    <FaStar /> {movie.vote_average.toFixed(1)}/10 IMDb
                  </span>
                  <p className="watchlist-container__overview">
                    {movie.overview}
                  </p>
                  <button
                    className="watchlist-container__remove-btn"
                    onClick={() => removeFromWatchlist(movie.id)}
                  >
                    <FaBookmark /> Remove from Watchlist
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Nav currentPath={location.pathname} />
    </>
  );
};

export default Watchlist;
