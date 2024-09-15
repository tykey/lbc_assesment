import styled from '@emotion/styled'
import { ToastType } from './Toast'
import {
  DANGER_COLOR,
  GRAY_400,
  GRAY_500,
  GRAY_800,
  GREEN_300,
  LIGHT_COLOR,
  RED_400,
  GREEN_500,
} from '../../../constants/colors'

type ToastWrapperProps = {
  type: ToastType
  isVisible: boolean
}

export const ToastWrapper = styled.div<ToastWrapperProps>`
  position: fixed;
  top: ${(props) => (props.isVisible ? '27px' : '0')};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  right: 34px;
  width: 443px;
  border-radius: 8px;
  z-index: 800;
  transition-property: top, opacity;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

type ToastBackgroundWrapperProps = {
  type: ToastType
}

export const ToastBackgroundWrapper = styled.div<ToastBackgroundWrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${(props) => {
    switch (props.type) {
      case ToastType.Success:
        return 'white'
      case ToastType.Error:
        return 'white'
      case ToastType.Information:
        return GRAY_800
    }
  }};
  padding: 12px 24px 12px 12px;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px #00000050;
  background-color: ${(props) => {
    switch (props.type) {
      case ToastType.Success:
        return GREEN_300
      case ToastType.Error:
        return RED_400
      case ToastType.Information:
        return GRAY_500
    }
  }};

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;

  > span {
    z-index: 820;
  }
`

type MovableBackgroundProps = {
  type: ToastType
  delaySeconds: number
}

export const MovableBackground = styled.div<MovableBackgroundProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${(props) => {
    switch (props.type) {
      case ToastType.Success:
        return GREEN_500
      case ToastType.Error:
        return DANGER_COLOR
      case ToastType.Information:
        return LIGHT_COLOR
    }
  }};
  z-index: 810;
  animation-duration: ${(props) => `${props.delaySeconds}s`};
  animation-name: toastBackground;
  animation-iteration-count: 1;
  animation-timing-function: linear;
`

export const CloseIconDiv = styled.div<ToastBackgroundWrapperProps>`
  position: absolute;
  right: 15px;
  z-index: 830;
  cursor: pointer;

  > svg {
    width: 12px;
    fill: ${(props) =>
      props.type === ToastType.Information ? GRAY_800 : 'white'};
  }
`
