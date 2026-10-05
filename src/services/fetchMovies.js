import { remapKeys } from "../utils/remapKeys";
import { MoviesError, kindFromStatus } from "./moviesError";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMovies({ signal } = {}) {
  if (!TOKEN) {
    throw new MoviesError("unknown", { cause: "VITE_TMDB_TOKEN não encontrado." });
  }

  let response;
  try {
    response = await fetch(`${BASE_URL}/movie/popular?language=pt-BR&page=1`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      signal,
    });
  } catch (err) {
    if (err?.name === "AbortError") throw err;
    throw new MoviesError("network", { cause: err });
  }

  if (!response.ok) {
    throw new MoviesError(kindFromStatus(response.status), {
      status: response.status,
    });
  }

  try {
    const data = await response.json();
    return data.results.map(remapKeys);
  } catch (err) {
    throw new MoviesError("unknown", { cause: err });
  }
}
