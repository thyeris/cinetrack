import styles from "./SearchBar.module.css";

function SearchBar({ value, onChange }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    onChange(event.target.value);
  }

  function handleClear() {
    onChange("");
  }

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit} role="search">
      <input
        type="text"
        className={styles.input}
        placeholder="Buscar filme pelo título..."
        aria-label="Buscar filme pelo título"
        value={value}
        onChange={handleChange}
      />

      {value && (
        <button
          type="button"
          className={styles.clear}
          onClick={handleClear}
          aria-label="Limpar busca"
        >
          ✕
        </button>
      )}
    </form>
  );
}

export default SearchBar;
