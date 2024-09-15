import styled from '@emotion/styled'
import {
  FRAME_14_HEIGHT,
  FRAME_15_GAP,
  FRAME_6_GAP,
  FRAME_9_GAP,
  FRAME_9_PADDING,
} from '../constants/dimensions'
import {
  GRAY_100,
  GRAY_300,
  GRAY_400,
  GRAY_700,
  GRAY_900,
} from '../constants/colors'

export const HomepageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: ${FRAME_9_GAP};
  width: 100%;
  padding: ${FRAME_9_PADDING};
  box-sizing: border-box;
  background-color: ${GRAY_100};
  border: solid 1px ${GRAY_400};
  border-radius: 8px;
  box-shadow: 0px -5px 0px 0px #67c0c2;
`

export const HomepageHeader = styled.div`
  height: ${FRAME_14_HEIGHT};
  font-family: 'Inter', sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: ${GRAY_900};
`

export const HomepageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: ${FRAME_15_GAP};
`

export const ContentMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: end;
  gap: ${FRAME_6_GAP};
`

export const MenuItemContainer = styled.div`
  flex: 1 1 auto;
`

export const TotalTasksSpan = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: ${GRAY_700};
`
