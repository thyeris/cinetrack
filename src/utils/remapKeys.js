export function remapKeys(item) {
  const rating = item.imdbRating === "N/A" ? 0 : Number(item.imdbRating) || 0;

  return {
    id: item.imdbID,
    title: item.Title,
    year: item.Year,
    poster: item.Poster,
    rating,
  };
}