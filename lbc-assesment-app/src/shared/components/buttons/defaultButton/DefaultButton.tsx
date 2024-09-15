import { memo } from 'react'
import { DefaultButtonStyled } from './DefaultButton.styled'

type DefaultButtonProps = {
  text: string
  onClick: () => void
}

const DefaultButton = ({ text, onClick }: DefaultButtonProps) => {
  return <DefaultButtonStyled onClick={onClick}>{text}</DefaultButtonStyled>
}

export default memo(DefaultButton)
