import { memo } from 'react'
import { FooterText, FooterWrapper } from './Footer.styled'
import LogoPNG from '../../assets/logo/logotipo_url.png'
import { pt } from '../../translations/pt'

const Footer = () => {
  return (
    <FooterWrapper>
      <img src={LogoPNG} />
      <FooterText>{pt.components.footer.text}</FooterText>
    </FooterWrapper>
  )
}

export default memo(Footer)
