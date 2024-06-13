import React from 'react';
import styles from './TextField.module.scss';

export type TextFieldProps = {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField: React.FC<TextFieldProps> = ({ value, placeholder, disabled, onChange }) => {
  return (
    <input
      type="text"
      className={styles.textField}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default TextField;
