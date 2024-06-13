// src/components/Switch/Switch.tsx
import React, { useState } from 'react';
import styles from './Switch.module.scss';

type SwitchProps = {
  isOn?: boolean;
  onToggle?: (isOn: boolean) => void;
};

const Switch: React.FC<SwitchProps> = ({ isOn = false, onToggle }) => {
  const [checked, setChecked] = useState(isOn);

  const handleToggle = () => {
    setChecked(!checked);
    if (onToggle) {
      onToggle(!checked);
    }
  };

  return (
    <div
      className={`${styles.switch} ${checked ? styles.checked : ''}`}
      onClick={handleToggle}
    >
      <div className={`${styles.slider} ${checked ? styles.checked : ''}`} />
    </div>
  );
};

export default Switch;
