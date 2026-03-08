import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../../components/header";
import Nav from "../../../components/NavigationBar";
import SeriesDetailsVideo from "../../../components/details/series/SeriesDetailsVideo";
import SeriesDetailsContent from "../../../components/details/series/SeriesDetailsContent";

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

function SeriesDetails() {
  const { id } = useParams();
  const location = useLocation();
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const [series, setSeries] = useState(null);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits,videos`,
        );
        const data = await response.json();
        setSeries(data);
      } catch (error) {
        console.error("Error fetching series details:", error);
      }
    };
    fetchSeries();
  }, [id]);

  if (!series) {
    return (
      <>
        <Header />
        <main className="series-details-page">
          <div>Loading...</div>
        </main>
        <Nav currentPath={location.pathname} />
      </>
    );
  }

  const videoKey = series.videos?.results?.[0]?.key || null;
  return (
    <>
      <Header />
      <main className="series-details-page">
        <div className="series-details-container">
          <SeriesDetailsVideo videoKey={videoKey} />
          <SeriesDetailsContent series={series} languageMap={languageMap} />
        </div>
      </main>
      <Nav currentPath={location.pathname} />
    </>
  );
}

export default SeriesDetails;
