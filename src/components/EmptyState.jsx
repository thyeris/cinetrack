import styles from "./EmptyState.module.css";

function EmptyState({ icon, title, message }) {
  return (
    <div className={styles.emptyState}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}

export default EmptyState;
