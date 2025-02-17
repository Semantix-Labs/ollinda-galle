import { toast, ToastOptions, Id } from 'react-toastify';

interface AlertOptions extends ToastOptions {
  position?: ToastOptions['position'];
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: undefined;
  theme?: ToastOptions['theme'];
  pauseOnFocusLoss?: boolean;
}

const defaultOptions: AlertOptions = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
  pauseOnFocusLoss: false,
};

const inputValidationOptions: AlertOptions = {
  ...defaultOptions,
  position: 'bottom-right',
  hideProgressBar: true,
  pauseOnHover: false,
};

const error = (msg: string, options?: Partial<AlertOptions>): Id => {
  return toast.error(msg, { ...defaultOptions, ...options, style: { backgroundColor: '#dc2626', color: '#fff' } }); // Red
};

const loading = (msg: string, options?: Partial<AlertOptions>): Id => {
  return toast.loading(msg, { ...defaultOptions, ...options, style: { backgroundColor: '#3b82f6', color: '#fff' } }); // Blue
};

const dismiss = (toastId: Id): void => {
  toast.dismiss(toastId);
};

const warn = (msg: string, options?: Partial<AlertOptions>): Id => {
  return toast.warn(msg, {
    ...defaultOptions,
    ...options,
    className: 'group px-6 py-3 rounded-lg !bg-white !text-yellow-500  border-yellow-500 dark:!bg-yellow-500/40 dark:!backdrop-blur-sm border dark:!border-yellow-500/50 hover:!bg-yellow-500/20 transition-all',
    style: { backgroundColor: '#eab308', color: '#fde047' }, // Yellow
  });
};

const success = (msg: string, options?: Partial<AlertOptions>): Id => {
  return toast.success(msg, {
    ...defaultOptions,
    ...options,
    className: 'group px-8 py-6 rounded-lg !bg-white/80 !text-blue-500 border-blue-500 dark:!bg-blue-800/30 !backdrop-blur-sm border dark:!border-blue-500/50 hover:!bg-blue-500/20 transition-all',
    style: { backgroundColor: '#eff6ff', color: '#1e3a8a' }, // tailwind green-300
  });
};

const inputValidation = (msg: string, options?: Partial<AlertOptions>): Id => {
  return toast.info(msg, { ...inputValidationOptions, ...options, style: { backgroundColor: '#60a5fa', color: '#fff' } }); // Light Blue
};

const alert = {
  error,
  warn,
  success,
  inputValidation,
  loading,
  dismiss,
};

export default alert;
