import { useState } from 'react'
import { ToastProps, ToastType } from '../components/toast/Toast'

export function useToast() {
  const [toastProps, setToastProps] = useState<ToastProps>({
    type: ToastType.Information,
    message: '',
    customKey: 0,
    delaySeconds: null,
    hide: true,
  })

  const hideToast = () => {
    setToastProps((prev) => {
      return {
        ...prev,
        hide: true,
      }
    })
  }

  const showToast = (
    type: ToastType,
    message: string,
    delaySeconds?: number
  ) => {
    setToastProps((prev) => {
      return {
        type,
        message,
        customKey: prev.customKey + 1,
        delaySeconds: delaySeconds,
        hide: false,
      }
    })
  }

  return { toastProps, hideToast, showToast }
}
