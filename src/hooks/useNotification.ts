import { useState, useCallback } from 'react';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

interface Notification {
  show: boolean;
  type: NotificationType;
  title: string;
  message: string;
}

export const useNotification = (duration = 5000) => {
  const [notification, setNotification] = useState<Notification>({
    show: false,
    type: 'success',
    title: '',
    message: '',
  });

  const showNotification = useCallback(
    (type: NotificationType, title: string, message: string) => {
      setNotification({ show: true, type, title, message });

      setTimeout(() => {
        setNotification((prev) => ({ ...prev, show: false }));
      }, duration);
    },
    [duration]
  );

  const hideNotification = useCallback(() => {
    setNotification((prev) => ({ ...prev, show: false }));
  }, []);

  return {
    notification,
    showNotification,
    hideNotification,
  };
};
