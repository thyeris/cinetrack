import { useCallback, useEffect, useState } from "react";
import { fetchMovies } from "../services/fetchMovies";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    fetchMovies({ signal: controller.signal })
      .then((result) => {
        if (controller.signal.aborted) return;
        setMovies(result);
        setLoading(false);
      })
      .catch((err) => {
        if (controller.signal.aborted) return;
        // O detalhe técnico fica só no console; a UI usa a mensagem amigável.
        console.error(err);
        setError(err);
        setLoading(false);
      });

    return () => controller.abort();
  }, [attempt]);

  const retry = useCallback(() => {
    setError(null);
    setLoading(true);
    setAttempt((current) => current + 1);
  }, []);

  return { movies, loading, error, retry };
}
