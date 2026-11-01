import { remapKeys } from "../utils/remapKeys";
import { MoviesError } from "./moviesError";
import { tmdbGet } from "./tmdb";

export async function searchMovies({ query, signal } = {}) {
  const data = await tmdbGet("/search/movie", {
    params: { query, page: 1, include_adult: false },
    signal,
  });

  try {
    return data.results.map(remapKeys);
  } catch (err) {
    throw new MoviesError("unknown", { cause: err });
  }
}
