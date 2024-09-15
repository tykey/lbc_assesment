import styled from '@emotion/styled'
import {
  FRAME_7_GAP,
  FRAME_7_MAX_WIDTH,
  FRAME_7_MIN_WIDTH,
} from './constants/dimensions'

export const AppContentWrapper = styled.div`
  width: 100%;
  max-width: ${FRAME_7_MAX_WIDTH};
  min-width: ${FRAME_7_MIN_WIDTH};
  margin: 0 auto;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: ${FRAME_7_GAP};
`
