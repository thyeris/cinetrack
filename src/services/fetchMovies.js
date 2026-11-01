import { remapKeys } from "../utils/remapKeys";
import { MoviesError } from "./moviesError";
import { tmdbGet } from "./tmdb";

export async function fetchMovies({ signal } = {}) {
  const data = await tmdbGet("/movie/popular", {
    params: { page: 1 },
    signal,
  });

  try {
    return data.results.map(remapKeys);
  } catch (err) {
    throw new MoviesError("unknown", { cause: err });
  }
}
