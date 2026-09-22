import EmptyState from "../components/EmptyState";
import MovieGrid from "../components/MovieGrid";
import { useMovies } from "../hooks/useMovies";
import styles from "./Home.module.css";

function Home() {
  const { movies, loading, error } = useMovies();

  if (loading) {
    return <p className={styles.status}>Carregando filmes…</p>;
  }

  if (error) {
    return (
      <EmptyState
        icon="⚠️"
        title="Não foi possível carregar os filmes =["
        message="Ocorreu um erro ao buscar os dados. Tente novamente mais tarde."
      />
    );
  }

  if (movies.length === 0) {
    return (
      <EmptyState
        icon="🎬"
        title="Nenhum filme encontrado :s"
        message="Ainda não há filmes cadastrados para exibir aqui!"
      />
    );
  }

  return <MovieGrid movies={movies} />;
}

export default Home;
