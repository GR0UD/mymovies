import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../../components/header";
import Nav from "../../../components/NavigationBar";

function CastDetails() {
  const { id } = useParams();
  const location = useLocation();
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US&append_to_response=movie_credits`,
      );
      const data = await response.json();
      setCast(data);
    }
    fetchCast();
  }, [id]);

  if (!cast) {
    return (
      <>
        <Header />
        <main className="cast-details-page">
          <div className="cast-details-loading">Loading...</div>
        </main>
        <Nav currentPath={location.pathname} />
      </>
    );
  }

  // Sort and filter movies
  const sortedMovies = cast.movie_credits.cast
    .filter((movie) => movie.poster_path)
    .sort((a, b) =>
      (b.release_date || "0000").localeCompare(a.release_date || "0000"),
    );

  return (
    <>
      <Header />
      <main className="cast-details-page">
        <div className="cast-details-container">
          {/* Profile Section */}
          <div className="cast-details__profile-section">
            <div className="cast-details__profile-image">
              <img
                src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
                alt={cast.name}
                className="cast-details__image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/placeholder.png";
                }}
              />
            </div>
            <div className="cast-details__profile-info">
              <h1 className="cast-details__name">{cast.name}</h1>
              <div className="cast-details__metadata">
                {cast.known_for_department && (
                  <div className="cast-details__meta-item">
                    <span className="label">Known For:</span>
                    <span className="value">{cast.known_for_department}</span>
                  </div>
                )}
                {cast.birthday && (
                  <div className="cast-details__meta-item">
                    <span className="label">Born:</span>
                    <span className="value">{cast.birthday}</span>
                  </div>
                )}
                {cast.place_of_birth && (
                  <div className="cast-details__meta-item">
                    <span className="label">Place:</span>
                    <span className="value">{cast.place_of_birth}</span>
                  </div>
                )}
              </div>
              {cast.biography && (
                <div className="cast-details__biography-inline">
                  <h2 className="cast-details__section-title-inline">
                    Biography
                  </h2>
                  <p className="cast-details__biography-text-inline">
                    {cast.biography}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Movies Section */}
          <div className="cast-details__movies-section">
            <h2 className="cast-details__section-title">
              Filmography ({sortedMovies.length})
            </h2>
            <ul className="cast-details__movie-list">
              {sortedMovies.map((movie) => (
                <li key={movie.id} className="cast-details__movie-item">
                  <Link
                    to={`/details/film/${movie.id}`}
                    className="cast-details__movie-link"
                  >
                    <div className="cast-details__movie-image-wrapper">
                      <img
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                        className="cast-details__movie-image"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/placeholder.png";
                        }}
                      />
                    </div>
                    <div className="cast-details__movie-info">
                      <h3 className="cast-details__movie-title">
                        {movie.title}
                      </h3>
                      <p className="cast-details__movie-year">
                        {movie.release_date
                          ? movie.release_date.substring(0, 4)
                          : "N/A"}
                      </p>
                      {movie.character && (
                        <p className="cast-details__movie-character">
                          as {movie.character}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Nav currentPath={location.pathname} />
    </>
  );
}

export default CastDetails;
