import MovieCard from "../components/MovieCard";
import { useMovies } from "../hooks/useMovies";
import styles from "./Home.module.css";

function Home() {
  const { movies, loading } = useMovies();

  if (loading) {
    return <p className={styles.status}>Carregando filmes…</p>;
  }

  return (
    <div className={styles.grid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
