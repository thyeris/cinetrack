import { useEffect, useState } from "react";
import { fetchMovies } from "../services/fetchMovies";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetchMovies().then((result) => {
      if (active) {
        setMovies(result);
        setLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return { movies, loading };
}
