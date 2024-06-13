import React from 'react';
import styles from './SearchInput.module.scss';

export type SearchInputProps = {
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ value, placeholder, onChange, onClear }) => {
  return (
    <div className={styles.searchInput}>
      <img src="/assets/icons/Search.svg" alt="Search" className={styles.icon} />
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={styles.input}
      />
      {value && (
        <button onClick={onClear} className={styles.clearButton}>
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchInput;
