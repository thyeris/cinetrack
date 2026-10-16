import { useState } from "react";
import EmptyState from "../components/EmptyState";
import MovieGrid from "../components/MovieGrid";
import MovieGridSkeleton from "../components/MovieGridSkeleton";
import SearchBar from "../components/SearchBar";
import { useMovies } from "../hooks/useMovies";
import { getUserMessage } from "../services/moviesError";

function Home() {
  const { movies, loading, error, retry } = useMovies();
  const [search, setSearch] = useState("");

  if (loading) {
    return <MovieGridSkeleton />;
  }

  if (error) {
    return (
      <EmptyState
        icon="⚠️"
        title="Não foi possível carregar os filmes =["
        message={getUserMessage(error)}
        actionLabel="Tentar novamente"
        onAction={retry}
        role="alert"
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

  const searchText = search.trim().toLowerCase();

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText)
  );

  return (
    <>
      <SearchBar value={search} onChange={setSearch} />

      {filteredMovies.length === 0 ? (
        <EmptyState
          icon="🔍"
          title="Nenhum filme encontrado"
          message={`Não encontramos resultados para "${search.trim()}".`}
        />
      ) : (
        <MovieGrid movies={filteredMovies} />
      )}
    </>
  );
}

export default Home;
