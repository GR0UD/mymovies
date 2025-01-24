import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/header";

function CastDetails() {
  const { id } = useParams();
  const API_KEY = "74c6766dbfbd327bf7e620410afd666b";
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US&append_to_response=movie_credits`
      );
      const data = await response.json();
      setCast(data);
    }
    fetchCast();
  }, [id]);

  if (!cast) {
    return <div>Loading...</div>;
  }

  return (
    <main className="cast-details-page">
      <Header />
      <div className="cast-details-container">
        <div className="cast-details">
          <div className="cast-details__profile">
            <img
              src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
              alt={cast.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder.png";
              }}
            />
            <h1 className="cast-details__name">{cast.name}</h1>
          </div>
          <div className="cast-details__biography">
            <h2>Biography</h2>
            <p>{cast.biography || "Biography not available."}</p>
          </div>
          <div className="cast-details__movies">
            <h2>Movies</h2>
            <ul className="cast-details__movie-list">
              {cast.movie_credits.cast.map((movie) => (
                <li key={movie.id} className="cast-details__movie-item">
                  <Link to={`/details/film/${movie.id}`} className="movie-link">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/placeholder.png";
                      }}
                    />
                    <div>
                      <h3>{movie.title}</h3>
                      <p>{movie.release_date || "N/A"}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CastDetails;
