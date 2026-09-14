export function remapKeys(item) {
  return {
    id: item.imdbID,
    title: item.Title,
    year: item.Year,
    poster: item.Poster,
    rating: item.imdbRating,
  };
}
