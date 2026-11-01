import axios from "axios";
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

export async function tmdbGet(path, { params, signal } = {}) {
  if (!TOKEN) {
    throw new MoviesError("unknown", { cause: "VITE_TMDB_TOKEN não encontrado." });
  }

  try {
    const response = await tmdb.get(path, { params, signal });
    return response.data;
  } catch (err) {
    if (axios.isCancel(err)) throw err;

    if (err.response) {
      throw new MoviesError(kindFromStatus(err.response.status), {
        status: err.response.status,
      });
    }

    throw new MoviesError("network", { cause: err });
  }
}
