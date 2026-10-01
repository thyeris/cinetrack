const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export function remapKeys(item) {
  const year = item.release_date ? item.release_date.slice(0, 4) : "";
  const poster = item.poster_path ? `${IMAGE_BASE_URL}${item.poster_path}` : null;
  const rating = item.vote_average > 0 ? item.vote_average : null;

  return {
    id: item.id,
    title: item.title,
    year,
    poster,
    rating,
  };
}
