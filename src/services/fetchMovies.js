import { remapKeys } from "../utils/remapKeys";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMovies() {
  if (!TOKEN) {
    throw new Error("VITE_TMDB_TOKEN não encontrado.");
  }

  const response = await fetch(`${BASE_URL}/movie/popular?language=pt-BR&page=1`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Erro ao buscar filmes (status ${response.status})`);
  }

  const data = await response.json();

  return data.results.map(remapKeys);
}
