function SeriesDetailsVideo({ videoKey }) {
  if (!videoKey) {
    return <p className="series-details__no-video">No video available</p>;
  }

  return (
    <iframe
      className="series-details__video"
      src={`https://www.youtube.com/embed/${videoKey}?modestbranding=1&controls=0&rel=0&showinfo=0`}
      style={{ border: 0 }}
      allowFullScreen
    ></iframe>
  );
}

export default SeriesDetailsVideo;
