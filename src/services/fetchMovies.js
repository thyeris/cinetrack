import { bdMovies } from "../utils/bdMovies";
import { remapKeys } from "../utils/remapKeys";

export async function fetchMovies() {
  return bdMovies.map(remapKeys);
}
