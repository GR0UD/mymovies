import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../../components/header";
import MovieDetailsVideo from "../../../components/details/MovieDetailsVideo";
import MovieDetailsContent from "../../../components/details/MovieDetailsContent";

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
const languageMap = {
  en: "English",
  es: "Spanish",
  fr: "French",
  de: "German",
  it: "Italian",
  pt: "Portuguese",
  ru: "Russian",
  ja: "Japanese",
  zh: "Chinese",
  ar: "Arabic",
  ko: "Korean",
  hi: "Hindi",
  bn: "Bengali",
  ur: "Urdu",
  fa: "Persian",
  he: "Hebrew",
  tr: "Turkish",
  vi: "Vietnamese",
  th: "Thai",
  sv: "Swedish",
  nl: "Dutch",
  pl: "Polish",
  id: "Indonesian",
  ms: "Malay",
  tl: "Tagalog",
  uk: "Ukrainian",
  el: "Greek",
  ro: "Romanian",
  hu: "Hungarian",
  cs: "Czech",
  sk: "Slovak",
  bg: "Bulgarian",
  sr: "Serbian",
  hr: "Croatian",
  fi: "Finnish",
  da: "Danish",
  te: "Telugu",
  no: "Norwegian",
};

function MovieDetails() {
  const { id } = useParams();
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

  return (
    <main className="movie-details-page">
      <Header />
      <div className="movie-details-container">
        <MovieDetailsVideo videoKey={movie.videos.results[0]?.key} />
        <MovieDetailsContent movie={movie} languageMap={languageMap} />
      </div>
    </main>
  );
}

export default MovieDetails;
