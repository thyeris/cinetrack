import styles from "./MovieCardSkeleton.module.css";

function MovieCardSkeleton() {
  return (
    <div className={styles.card} aria-hidden="true">
      <div className={styles.poster} />

      <div className={styles.info}>
        <div className={styles.title} />
        <div className={styles.year} />
      </div>
    </div>
  );
}

export default MovieCardSkeleton;
