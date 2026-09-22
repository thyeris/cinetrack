import MovieGrid from "../components/MovieGrid";
import { useMovies } from "../hooks/useMovies";
//import styles from "./Home.module.css";

function Home() {
  const { movies, loading } = useMovies();

  if (loading) {
    return <p>Carregando filmes…</p>;
  }

  return <MovieGrid movies={movies} />;
}

export default Home;
