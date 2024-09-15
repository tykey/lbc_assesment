import styled from '@emotion/styled'
import {
  HEADER_LOGO_HEIGHT,
  HEADER_LOGO_WIDTH,
  HEADER_PADDING_TOP,
} from '../../../constants/dimensions'

export const HeaderContainer = styled.div`
  width: 100%;
  padding-top: ${HEADER_PADDING_TOP};

  > img {
    height: ${HEADER_LOGO_HEIGHT};
    width: ${HEADER_LOGO_WIDTH};
  }
`
