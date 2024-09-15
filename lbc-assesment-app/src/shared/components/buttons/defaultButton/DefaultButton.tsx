import { memo } from 'react'
import { DefaultButtonStyled } from './DefaultButton.styled'

type DefaultButtonProps = {
  text: string
  onClick: () => void
  isDisabled?: boolean
}

const DefaultButton = ({ text, onClick, isDisabled }: DefaultButtonProps) => {
  return (
    <DefaultButtonStyled onClick={onClick} isDisabled={isDisabled}>
      {text}
    </DefaultButtonStyled>
  )
}

export default memo(DefaultButton)
