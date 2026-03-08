import { useState, useEffect } from "react";
import { FaStar, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useWatchlist } from "../../contexts/WatchlistContext";

function Fetch() {
  const API_KEY = "74c6766dbfbd327bf7e620410afd666b";
  const [data, setData] = useState([]);
  const { isInWatchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
      );
      const data = await response.json();
      setData(data.results);
    }
    fetchData();
  }, []);

  const handleBookmarkClick = (e, movie) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWatchlist(movie.id)) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };

  return (
    <div className="category-container">
      <div className="category-container__header">
        <h2 className="category-container__title">Now Showing</h2>
        <button className="category-container__button">See more</button>
      </div>

      <ul className="category-container__list">
        {data.map((item) => (
          <li key={item.id} className="category-container__item">
            <div className="category-container__image-wrapper">
              <Link
                className="category-container__link"
                to={`/details/film/${item.id}`}
              >
                <img
                  className="category-container__image"
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.title}
                />
              </Link>
              <button
                className="category-container__bookmark-btn"
                onClick={(e) => handleBookmarkClick(e, item)}
                aria-label={
                  isInWatchlist(item.id)
                    ? "Remove from watchlist"
                    : "Add to watchlist"
                }
              >
                {isInWatchlist(item.id) ? (
                  <FaBookmark className="bookmark-icon filled" />
                ) : (
                  <FaRegBookmark className="bookmark-icon" />
                )}
              </button>
            </div>
            <div className="category-container__details">
              <Link
                className="category-container__link"
                to={`/details/film/${item.id}`}
              >
                <h3 className="category-container__movie-title">
                  {item.title}
                </h3>
              </Link>
              <span className="category-container__rating">
                <FaStar /> {item.vote_average.toFixed(1)}/10 IMDb
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;
