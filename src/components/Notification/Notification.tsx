import React from 'react';
import styles from './Notification.module.scss';


export type NotificationProps = {
  message: string;
};

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return (
    <div className={styles.notification}>
      <img src='/assets/icons/Check.svg' alt="Check" className={styles.icon} />
      <span>{message}</span>
    </div>
  );
};

export default Notification;
