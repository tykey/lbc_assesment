import styled from '@emotion/styled'
import { GRAY_300, GRAY_800, GRAY_900 } from '../../../constants/colors'

export const TasksListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
`

export const TasksListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 15px 25px 16px 25px;
  box-sizing: border-box;
  border-top: solid 1px ${GRAY_300};
  border-bottom: solid 2px ${GRAY_300};
`

type TasksListHeaderLabelProps = {
  flex: number
}

export const TasksListHeaderLabel = styled.span<TasksListHeaderLabelProps>`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 800;
  color: ${GRAY_900};
  overflow: hidden;

  flex: ${(props) => props.flex};
`

export const TaskWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
  border-bottom: solid 1px ${GRAY_300};
  width: 100%;
  padding: 10px 25px 10px 25px;
  box-sizing: border-box;
`

export const TaskDescription = styled.div<TasksListHeaderLabelProps>`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 2px;

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  color: ${GRAY_800};
  overflow: hidden;

  flex: ${(props) => props.flex};
`
