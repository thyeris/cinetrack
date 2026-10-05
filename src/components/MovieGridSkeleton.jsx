import MovieCardSkeleton from "./MovieCardSkeleton";
import styles from "./MovieGrid.module.css";

const SKELETON_COUNT = 10;

function MovieGridSkeleton() {
  return (
    <div className={styles.grid} role="status" aria-label="Carregando filmes">
      {Array.from({ length: SKELETON_COUNT }, (_, index) => (
        <MovieCardSkeleton key={index} />
      ))}
    </div>
  );
}

export default MovieGridSkeleton;
