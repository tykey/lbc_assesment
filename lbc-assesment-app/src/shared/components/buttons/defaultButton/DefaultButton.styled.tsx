import styled from '@emotion/styled'
import { PRIMARY_COLOR, PRIMARY_COLOR_DARK } from '../../../../constants/colors'

type DefaultButtonStyledProps = {
  isDisabled?: boolean
}

export const DefaultButtonStyled = styled.button<DefaultButtonStyledProps>`
  background-color: ${PRIMARY_COLOR};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};
  padding: 10px 16px;
  transition: all 0.1s ease-out;
  opacity: ${(props) => (props.isDisabled ? 0.5 : 1)};

  &:hover {
    ${(props) =>
      !props.isDisabled ? `background-color: ${PRIMARY_COLOR_DARK};` : ''}
  }
`
