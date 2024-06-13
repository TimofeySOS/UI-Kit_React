import React, { useState } from 'react';
import styles from './ListElement.module.scss';

export type ListElementProps = {
  options: string[];
  defaultSelectedIndex?: number;
};

const ListElement: React.FC<ListElementProps> = ({ options, defaultSelectedIndex = 1 }) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[defaultSelectedIndex]);

  return (
    <div className={styles.listContainer}>
      {options.map((option, index) => (
        <div
          key={index}
          className={`${styles.listElement} ${
            selectedOption === option ? styles.selected : ''
          }`}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default ListElement;
