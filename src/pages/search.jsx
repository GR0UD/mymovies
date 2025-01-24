import React, { useState } from "react";
import Header from "../components/header";
import Nav from "../components/Nav";

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
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="movie-poster"
            />
            <div className="movie-details">
              <p className="movie-meta">
                {movie.release_date?.slice(0, 4) || "N/A"} ·{" "}
                {movie.media_type === "movie" ? "Movie" : "TV"}
              </p>
              <h3 className="movie-title">{movie.title || movie.name}</h3>

              <button
                className="details-button"
                onClick={() =>
                  alert(`Details for ${movie.title || movie.name}`)
                }
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </main>
      <Nav currentPath={location.pathname} />
    </>
  );
};

export default Index;
