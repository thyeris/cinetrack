import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  const { title, year, poster, rating } = movie;

  const hasRating = rating === "N/A" || (typeof rating === "number" && rating >= 0);

  return (
    <div className={styles.card}>
      <div className={styles.posterWrap}>
        <img className={styles.poster} src={poster} alt={title} />
        {hasRating ? (
          <span className={styles.ratingBadge}>
            {typeof rating === "number" ? rating.toFixed(1) : rating}
          </span>
        ) : (
          <span className={`${styles.ratingBadge} ${styles.noRating}`}>
            Sem avaliação
          </span>
        )}
      </div>

      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.year}>{year}</p>
      </div>
    </div>
  );
}

export default MovieCard;