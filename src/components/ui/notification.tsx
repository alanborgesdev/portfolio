import { CheckCircle, XCircle, Info, AlertTriangle } from 'lucide-react';
import { NotificationType } from '@/hooks/useNotification';

interface NotificationProps {
  show: boolean;
  type: NotificationType;
  title: string;
  message: string;
}

const iconMap = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
  warning: AlertTriangle,
};

const colorMap = {
  success: 'bg-green-500 text-white',
  error: 'bg-red-500 text-white',
  info: 'bg-blue-500 text-white',
  warning: 'bg-yellow-500 text-white',
};

export const Notification = ({ show, type, title, message }: NotificationProps) => {
  if (!show) return null;

  const Icon = iconMap[type];

  return (
    <div
      role='alert'
      aria-live='polite'
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-start gap-3 max-w-md animate-slide-in ${colorMap[type]}`}
    >
      <Icon size={24} className='flex-shrink-0 mt-0.5' />
      <div className='flex-1'>
        <h4 className='font-semibold mb-1'>{title}</h4>
        <p className='text-sm opacity-90'>{message}</p>
      </div>
    </div>
  );
};
