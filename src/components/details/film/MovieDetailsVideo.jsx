function MovieDetailsVideo({ videoKey }) {
  return (
    <iframe
      className="movie-details__video"
      src={`https://www.youtube.com/embed/${videoKey}?modestbranding=1&controls=0&rel=0&showinfo=0`}
      style={{ border: 0 }}
      allowFullScreen
    ></iframe>
  );
}

export default MovieDetailsVideo;
