import { FaRegBookmark, FaStar, FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useWatchlist } from "../../../contexts/WatchlistContext";

function MovieDetailsContent({ movie, languageMap }) {
  const { isInWatchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();

  const handleBookmarkClick = () => {
    if (isInWatchlist(movie.id)) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };

  return (
    <div className="movie-details">
      <div>
        <div className="movie-details__header">
          <h1 className="movie-details__title">{movie.title}</h1>
          <button
            className="movie-details__bookmark-btn"
            onClick={handleBookmarkClick}
            aria-label={
              isInWatchlist(movie.id)
                ? "Remove from watchlist"
                : "Add to watchlist"
            }
          >
            {isInWatchlist(movie.id) ? (
              <FaBookmark className="bookmark-icon filled" />
            ) : (
              <FaRegBookmark className="bookmark-icon" />
            )}
          </button>
        </div>
        <div className="movie-details__rating">
          <FaStar /> {movie.vote_average.toFixed(1)}/10 IMDb
        </div>
      </div>

      <div>
        <div className="movie-details__tags">
          {movie.genres.map((genre) => (
            <span key={genre.id} className="tag">
              {genre.name}
            </span>
          ))}
        </div>

        <div className="movie-details__info">
          <div className="movie-details__info-box">
            <span>Length</span>
            <span>
              {movie.runtime
                ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`
                : "N/A"}
            </span>
          </div>

          <div className="movie-details__info-box">
            <span>Language</span>
            <span>
              {languageMap[movie.original_language] || movie.original_language}
            </span>
          </div>

          <div className="movie-details__info-box">
            <span>Rating</span>
            <span>{movie.adult ? "R" : "PG-13"}</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="movie-details__heading">Description</h2>
        <p className="movie-details__description">{movie.overview}</p>
      </div>

      <div>
        <div className="cast-container__header">
          <h2 className="cast-container__title">Cast</h2>
          <button className="cast-container__button">See more</button>
        </div>

        <ul className="movie-details__cast">
          {movie.credits.cast.map((actor) => (
            <li key={actor.cast_id} className="movie-details__cast-item">
              <Link to={`/details/cast/${actor.id}`} className="cast-link">
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                  className="movie-details__cast-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder.png";
                  }}
                />
                <h3 className="movie-details__cast-name">{actor.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieDetailsContent;
