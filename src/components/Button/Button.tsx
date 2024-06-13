import React from 'react';
import styles from './Button.module.scss';

export type ButtonProps = {
  variant: 'primary' | 'primary-hover' | 'primary-active' | 'primary-disabled' |
            'secondary' | 'secondary-hover' | 'secondary-active' | 'secondary-disabled';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ variant, disabled = false, children, onClick }) => {
  const classNames = `${styles.button} ${styles[variant]}`;

  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
