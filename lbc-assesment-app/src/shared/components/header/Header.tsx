import { memo } from 'react'
import { HeaderContainer } from './Header.styled'
import LogoPNG from '../../assets/logo/logotipo_url.png'

const Header = () => {
  return (
    <HeaderContainer>
      <img src={LogoPNG} />
    </HeaderContainer>
  )
}

export default memo(Header)
