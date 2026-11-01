import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { searchMovies } from "../services/searchMovies";

export function useMovieSearch(query) {
  const [result, setResult] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!query) return;

    const controller = new AbortController();

    searchMovies({ query, signal: controller.signal })
      .then((movies) => {
        setResult({ query, movies, error: null });
      })
      .catch((err) => {
        // Cancelamento não é erro: foi uma busca substituída por outra.
        if (axios.isCancel(err)) return;

        console.error(err);
        setResult({ query, movies: [], error: err });
      });

    return () => controller.abort();
  }, [query, attempt]);

  const retry = useCallback(() => {
    setResult(null);
    setAttempt((current) => current + 1);
  }, []);

  const hasResult = result !== null && result.query === query;

  return {
    movies: hasResult ? result.movies : [],
    loading: Boolean(query) && !hasResult,
    error: hasResult ? result.error : null,
    retry,
  };
}
