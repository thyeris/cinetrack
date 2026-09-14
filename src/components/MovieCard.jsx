import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  const { title, year, poster, rating } = movie;

  return (
    <div className={styles.card}>
      <div className={styles.posterWrap}>
        <img className={styles.poster} src={poster} alt={title} />
        <span className={styles.ratingBadge}>{rating}</span>
      </div>

      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.year}>{year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
