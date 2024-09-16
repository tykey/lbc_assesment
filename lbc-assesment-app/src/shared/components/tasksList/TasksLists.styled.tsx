import styled from '@emotion/styled'
import {
  DANGER_COLOR,
  GRAY_300,
  GRAY_500,
  GRAY_800,
  GRAY_900,
  RED_100,
  RED_700,
  SUCCESS_COLOR,
} from '../../../constants/colors'

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

type RemoveButtonProps = {
  isHidden?: boolean
}

export const RemoveButton = styled.button<RemoveButtonProps>`
  background-color: ${RED_100};
  border: solid 1px transparent;
  border-radius: 6px;
  cursor: ${(props) => (props.isHidden ? 'default' : 'pointer')};
  padding: 10px 16px;
  transition: border 0.1s ease-out;
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
  pointer-events: ${(props) => (props.isHidden ? 'none' : 'all')};

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${RED_700};

  &:hover {
    border: solid 1px ${RED_700};
  }
`

export const NoResultsSpan = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${GRAY_800};
  margin-top: 25px;
  width: 100%;
  text-align: center;
`

type FinishedDivProps = {
  isFinished: boolean
}

export const FinishedDiv = styled.div<FinishedDivProps>`
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  line-height: 12.1px;
  font-weight: 600;
  color: white;

  padding: 4px 8px;
  background-color: ${SUCCESS_COLOR};
  border-radius: 12px;

  transition: all 0.15s ease-out;
  opacity: ${(props) => (props.isFinished ? 1 : 0)};
  margin-left: 10px;
`
