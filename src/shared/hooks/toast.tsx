import { toast } from 'react-toastify'

type ToastTypes = {
  message: string
  type: 'success' | 'error' | 'pending'
}

export const makeToast = (toastProps: ToastTypes): void => {
  const { message, type } = toastProps
  toast[type](message)
}
