import { ToastOptions, ToastPosition, toast } from 'react-toastify';

export const showErrorToast = (errorMessage: string) => {
  const toastOptions: ToastOptions = {
    position: 'top-right' as ToastPosition,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };
  toast.error(errorMessage, toastOptions);
};

export const showSuccessToast = (successMessage: string) => {
  const toastOptions: ToastOptions = {
    position: 'top-right' as ToastPosition,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };
  toast.success(successMessage, toastOptions);
};
