import { FaRegBookmark, FaStar } from "react-icons/fa";

function SeriesDetailsContent({ series, languageMap }) {
  return (
    <div className="series-details">
      <div className="series-details__header">
        <h1 className="series-details__title">{series.name}</h1>
        <FaRegBookmark className="series-details__bookmark" />
      </div>

      <div className="series-details__rating">
        <FaStar /> {series.vote_average?.toFixed(1) || "N/A"}/10 IMDb
      </div>

      <div className="series-details__tags">
        {series.genres.map((genre) => (
          <span key={genre.id} className="tag">
            {genre.name}
          </span>
        ))}
      </div>

      <div className="series-details__info">
        <div className="series-details__info-box">
          <span>Seasons</span>
          <span>{series.number_of_seasons || "N/A"}</span>
        </div>
        <div className="series-details__info-box">
          <span>Episodes</span>
          <span>{series.number_of_episodes || "N/A"}</span>
        </div>
        <div className="series-details__info-box">
          <span>Language</span>
          <span>
            {series.languages
              ?.map((lang) => languageMap[lang] || lang)
              .join(", ") || "N/A"}
          </span>
        </div>
        <div className="series-details__info-box">
          <span>Status</span>
          <span>{series.status || "Unknown"}</span>
        </div>
      </div>

      <div>
        <h2 className="series-details__heading">Description</h2>
        <p className="series-details__description">
          {series.overview || "No description available."}
        </p>
      </div>

      <div>
        <div className="cast-container__header">
          <h2 className="cast-container__title">Main Cast</h2>
          <button className="cast-container__button">See more</button>
        </div>

        <ul className="series-details__cast">
          {series.credits?.cast?.slice(0, 10).map((actor) => (
            <li key={actor.id} className="series-details__cast-item">
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className="series-details__cast-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/placeholder.png";
                }}
              />
              <h3 className="series-details__cast-name">
                {actor.name} <span>as {actor.character}</span>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SeriesDetailsContent;
