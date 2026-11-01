import { useState } from "react";
import EmptyState from "../components/EmptyState";
import MovieGrid from "../components/MovieGrid";
import MovieGridSkeleton from "../components/MovieGridSkeleton";
import SearchBar from "../components/SearchBar";
import { useDebounce } from "../hooks/useDebounce";
import { useMovieSearch } from "../hooks/useMovieSearch";
import { useMovies } from "../hooks/useMovies";
import { getUserMessage } from "../services/moviesError";

function Home() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 400);

  const term = search.trim() === "" ? "" : debouncedSearch.trim();
  const isSearching = term !== "";

  const popular = useMovies();
  const searched = useMovieSearch(term);
  const { movies, loading, error, retry } = isSearching ? searched : popular;

  function renderContent() {
    if (loading) {
      return <MovieGridSkeleton />;
    }

    if (error) {
      return (
        <EmptyState
          compact
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
      return isSearching ? (
        <EmptyState
          compact
          icon="🔍"
          title="Nenhum filme encontrado"
          message={`Não encontramos resultados para "${term}".`}
        />
      ) : (
        <EmptyState
          compact
          icon="🎬"
          title="Nenhum filme encontrado :s"
          message="Ainda não há filmes cadastrados para exibir aqui!"
        />
      );
    }

    return <MovieGrid movies={movies} />;
  }

  return (
    <>
      <SearchBar value={search} onChange={setSearch} />
      {renderContent()}
    </>
  );
}

export default Home;
