import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Header from "../components/header";
import { FaStar } from "react-icons/fa";

const Index = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const API_KEY = "74c6766dbfbd327bf7e620410afd666b";
    const BASE_URL = "https://api.themoviedb.org/3/search/multi";

    try {
      const response = await fetch(
        `${BASE_URL}?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}&include_adult=false&language=en-US&page=1`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <>
      <Header query={query} setQuery={setQuery} onSearch={searchMovies} />
      <main className="movie-container">
        {movies
          .filter(
            (movie) =>
              movie.poster_path &&
              (movie.release_date || movie.first_air_date) &&
              movie.vote_average !== undefined
          )
          .map((movie) => {
            const posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            const releaseYear =
              movie.release_date?.slice(0, 4) ||
              movie.first_air_date?.slice(0, 4);
            const movieId = movie.id;
            const mediaType = movie.media_type; // "movie" or "tv"
            const detailsPath = mediaType === "movie" ? "film" : "series";

            return (
              <div className="movie-card" key={movieId}>
                <Link
                  to={`/details/${detailsPath}/${movieId}`}
                  className="movie-link"
                >
                  <img
                    src={posterPath}
                    alt={movie.title || movie.name || "No title available"}
                    className="movie-poster"
                  />
                </Link>
                <div className="movie-details">
                  <p className="movie-meta">
                    <span className="movie-rating">
                      <FaStar />
                      {movie.vote_average.toFixed(1)}
                    </span>
                    <span className="movie-media-type">
                      {mediaType === "movie" ? "Movie" : "TV"}
                    </span>
                    <span className="movie-year">{releaseYear}</span>
                  </p>
                  <Link
                    className="movie-title"
                    to={`/details/${detailsPath}/${movieId}`}
                  >
                    <h3>{movie.title || movie.name}</h3>
                  </Link>

                  <Link
                    to={`/details/${detailsPath}/${movieId}`}
                    className="details-button"
                  >
                    Details
                  </Link>
                </div>
              </div>
            );
          })}
      </main>
    </>
  );
};

export default Index;
