import styled from '@emotion/styled'
import {
  FOOTER_LOGO_HEIGHT,
  FOOTER_LOGO_WIDTH,
  FOOTER_PADDING_VERTICAL,
} from '../../../constants/dimensions'
import { GRAY_700 } from '../../../constants/colors'

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 32px;
  padding: ${FOOTER_PADDING_VERTICAL} 0;

  > img {
    height: ${FOOTER_LOGO_HEIGHT};
    width: ${FOOTER_LOGO_WIDTH};
  }
`

export const FooterText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  color: ${GRAY_700};
`
