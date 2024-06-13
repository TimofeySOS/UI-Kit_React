import React from 'react';
import styles from './Tooltip.module.scss';

export type TooltipProps = {
  text: string;
};

const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  return (
    <div className={styles.tooltipContainer}>
      <span className={styles.tooltipText}>{text}</span>
    </div>
  );
};

export default Tooltip;
