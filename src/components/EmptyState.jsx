import styles from "./EmptyState.module.css";

function EmptyState({
  icon,
  title,
  message,
  actionLabel,
  onAction,
  role,
  compact = false,
}) {
  const className = compact
    ? `${styles.emptyState} ${styles.compact}`
    : styles.emptyState;

  return (
    <div className={className} role={role}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {message && <p className={styles.message}>{message}</p>}
      {actionLabel && onAction && (
        <button type="button" className={styles.action} onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default EmptyState;
