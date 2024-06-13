import React, { useState } from 'react';
import styles from './SelectElement.module.scss';

export type SelectElementProps = {
  options: string[];
  placeholder?: string;
  disabled?: boolean;
};

const SelectElement: React.FC<SelectElementProps> = ({ options, placeholder = "Select option", disabled = false }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.selectContainer}>
      <select
        value={selectedOption}
        onChange={handleChange}
        className={styles.selectElement}
        disabled={disabled}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectElement;
