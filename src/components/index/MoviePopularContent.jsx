import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi2";
import { Link } from "react-router-dom";

const genreList = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

function Fetch() {
  const API_KEY = "74c6766dbfbd327bf7e620410afd666b";
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const movieList = await response.json();

      const detailedMovies = await Promise.all(
        movieList.results.map(async (movie) => {
          const detailsResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=en-US`
          );
          const details = await detailsResponse.json();
          return { ...movie, runtime: details.runtime };
        })
      );

      setData(detailedMovies);
    }
    fetchData();
  }, []);

  const getGenres = (genreIds) => {
    return genreIds
      .map((id) => genreList.find((genre) => genre.id === id)?.name)
      .filter((name) => name);
  };

  return (
    <div className="category-container">
      <div className="category-container__header">
        <h2 className="category-container__title">Popular</h2>
        <button className="category-container__button">See more</button>
      </div>

      <ul className="category-container__list">
        {data.map((item) => (
          <li key={item.id} className="category-container__item">
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
                <FaStar /> {item.vote_average}/10 IMDb
              </span>
              <div className="category-container__tags">
                {getGenres(item.genre_ids).map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="category-container__runtime">
                <HiOutlineClock />
                {item.runtime
                  ? `${Math.floor(item.runtime / 60)}h ${item.runtime % 60}m`
                  : "N/A"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;
