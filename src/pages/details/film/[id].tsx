import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../../components/header";
import Nav from "../../../components/NavigationBar";
import MovieDetailsVideo from "../../../components/details/film/MovieDetailsVideo";
import MovieDetailsContent from "../../../components/details/film/MovieDetailsContent";
import type { Movie, LanguageMap } from "../../../types/tmdb";

const languageMap: LanguageMap = {
  en: "English", es: "Spanish", fr: "French", de: "German", it: "Italian",
  pt: "Portuguese", ru: "Russian", ja: "Japanese", zh: "Chinese", ar: "Arabic",
  ko: "Korean", hi: "Hindi", bn: "Bengali", ur: "Urdu", fa: "Persian",
  he: "Hebrew", tr: "Turkish", vi: "Vietnamese", th: "Thai", sv: "Swedish",
  nl: "Dutch", pl: "Polish", id: "Indonesian", ms: "Malay", tl: "Tagalog",
  uk: "Ukrainian", el: "Greek", ro: "Romanian", hu: "Hungarian", cs: "Czech",
  sk: "Slovak", bg: "Bulgarian", sr: "Serbian", hr: "Croatian", fi: "Finnish",
  da: "Danish", te: "Telugu", no: "Norwegian",
};

function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits,videos`,
      );
      const data = await response.json();
      setMovie(data);
    }
    fetchMovie();
  }, [id, API_KEY]);

  if (!movie) {
    return (
      <>
        <Header />
        <main className="movie-details-page">
          <div>Loading...</div>
        </main>
        <Nav currentPath={location.pathname} />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="movie-details-page">
        <div className="movie-details-container">
          <MovieDetailsVideo videoKey={movie.videos.results[0]?.key} />
          <MovieDetailsContent movie={movie} languageMap={languageMap} />
        </div>
      </main>
      <Nav currentPath={location.pathname} />
    </>
  );
}

export default MovieDetails;
