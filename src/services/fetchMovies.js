import axios from "axios";
import { remapKeys } from "../utils/remapKeys";
import { MoviesError, kindFromStatus } from "./moviesError";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
  params: {
    language: "pt-BR",
  },
});

export async function fetchMovies({ signal } = {}) {
  if (!TOKEN) {
    throw new MoviesError("unknown", { cause: "VITE_TMDB_TOKEN não encontrado." });
  }

  let response;
  try {
    response = await tmdb.get("/movie/popular", {
      params: { page: 1 },
      signal,
    });
  } catch (err) {
    if (axios.isCancel(err)) throw err;

    if (err.response) {
      throw new MoviesError(kindFromStatus(err.response.status), {
        status: err.response.status,
      });
    }

    throw new MoviesError("network", { cause: err });
  }

  try {
    return response.data.results.map(remapKeys);
  } catch (err) {
    throw new MoviesError("unknown", { cause: err });
  }
}
