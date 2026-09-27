import { useEffect, useState } from "react";
import { fetchMovies } from "../services/fetchMovies";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    fetchMovies()
      .then((result) => {
        if (active) {
          setMovies(result);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (active) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return { movies, loading, error };
}
