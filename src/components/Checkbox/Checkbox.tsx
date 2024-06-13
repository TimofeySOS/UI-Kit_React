import React from 'react';
import styles from './Checkbox.module.scss';

export type CheckboxProps = {
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ checked, disabled, onChange }) => {
  return (
    <label className={`${styles.checkbox} ${checked ? styles.checked : ''} ${disabled ? styles.disabled : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default Checkbox;
