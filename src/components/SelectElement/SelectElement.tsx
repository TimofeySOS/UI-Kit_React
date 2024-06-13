import React, { useState } from 'react';
import styles from './SelectElement.module.scss';

export type SelectElementProps = {
  options: string[];
  placeholder?: string;
  disabled?: boolean;
};

const SelectElement: React.FC<SelectElementProps> = ({ options, placeholder = "Select option", disabled = false }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  console.log('Image path:', '../../../public/assets/icons/Arrow.svg');
  return (
    <div className={styles.selectContainer}>
      <div className={styles.customSelect} onClick={toggleOpen}>
        <div className={styles.selectValue}>{selectedOption || placeholder}</div>
        <div className={`${styles.selectArrow} ${isOpen ? styles.arrowUp : styles.arrowDown}`}><img src='../../../public/assets/icons/Arrow.svg' alt='Arrow'/></div>
        <select
          value={selectedOption}
          onChange={(e) => handleSelect(e.target.value)}
          className={styles.selectElement}
          disabled={disabled}
        >
          <option value="" disabled hidden>{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectElement;
