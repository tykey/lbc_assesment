import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import {
  CloseIconDiv,
  MovableBackground,
  ToastBackgroundWrapper,
  ToastWrapper,
} from './Toast.styled'
import CloseIcon from '../../assets/svg/close.svg'

export enum ToastType {
  Success,
  Error,
  Information,
}

export type ToastProps = {
  type: ToastType
  message: string
  customKey: number
  delaySeconds?: number
  hide?: boolean
}

const Toast = ({
  type,
  message,
  customKey,
  delaySeconds,
  hide,
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [currTimeout, setCurrTimeout] = useState<any>(null)

  const hideToast = () => {
    setIsVisible(false)
  }

  useEffect(() => {
    if (customKey > 0) {
      if (currTimeout) clearTimeout(currTimeout)

      hideToast()
      setIsVisible(true)
    }
  }, [customKey])

  useEffect(() => {
    if (isVisible && delaySeconds > 0) {
      let timeout = setTimeout(() => {
        hideToast()
      }, delaySeconds * 1000)

      setCurrTimeout(timeout)
    }
  }, [isVisible, delaySeconds, customKey])

  useEffect(() => {
    setIsVisible(!hide)
  }, [hide])

  return (
    <ToastWrapper type={type} isVisible={isVisible}>
      <ToastBackgroundWrapper type={type}>
        <span>{message}</span>
      </ToastBackgroundWrapper>
      <MovableBackground
        type={type}
        key={customKey}
        delaySeconds={delaySeconds}
      />
      <CloseIconDiv onClick={hideToast} type={type}>
        <CloseIcon />
      </CloseIconDiv>
    </ToastWrapper>
  )
}

export default Toast
