export function remapKeys(item) {
  const value = item.imdbRating;
  const num = Number(value);

  let rating;
  if (value === "N/A") {
    rating = "N/A";
  } else if (value !== null && value !== undefined && value !== "" && !isNaN(num) && num >= 0) {
    rating = num;
  } else {
    rating = null;
  }

  return {
    id: item.imdbID,
    title: item.Title,
    year: item.Year,
    poster: item.Poster,
    rating,
  };
}