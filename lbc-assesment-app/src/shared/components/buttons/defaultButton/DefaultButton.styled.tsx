import styled from '@emotion/styled'
import { PRIMARY_COLOR, PRIMARY_COLOR_DARK } from '../../../../constants/colors'

export const DefaultButtonStyled = styled.button`
  background-color: ${PRIMARY_COLOR};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 10px 16px;
  transition: all 0.1s ease-out;

  &:hover {
    background-color: ${PRIMARY_COLOR_DARK};
  }
`
