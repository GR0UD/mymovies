import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../../components/header";
import { FaRegBookmark, FaStar } from "react-icons/fa";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); // For navigation
  const API_KEY = "74c6766dbfbd327bf7e620410afd666b";
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits,videos`
      );
      const data = await response.json();
      setMovie(data);
    }
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const handleCastClick = (castId) => {
    navigate(`/cast/${castId}`); // Navigate to CastDetails page
  };

  return (
    <main className="movie-details-page">
      <Header />
      <div className="movie-details-container">
        <iframe
          className="movie-details__video"
          src={`https://www.youtube.com/embed/${movie.videos.results[0]?.key}`}
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>

        <div className="movie-details">
          <h1 className="movie-details__title">{movie.title}</h1>
          <div className="movie-details__rating">
            <FaStar /> {movie.vote_average}/10 IMDb
          </div>

          <h2 className="movie-details__heading">Cast</h2>
          <ul className="movie-details__cast">
            {movie.credits.cast.map((actor) => (
              <li
                key={actor.cast_id}
                className="movie-details__cast-item"
                onClick={() => handleCastClick(actor.id)}
              >
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default MovieDetails;
