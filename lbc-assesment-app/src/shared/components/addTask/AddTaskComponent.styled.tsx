import styled from '@emotion/styled'
import {
  ADD_TASK_INPUT_CONTAINER_GAP,
  ADD_TASK_WRAPPER_GAP,
} from '../../../constants/dimensions'
import { GRAY_300 } from '../../../constants/colors'

export const AddTaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  width: 100%;
  gap: 6px;

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`

export const AddTaskBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: stretch;
  gap: 8px;
  width: 100%;
`

export const AddTaskInput = styled.input`
  border: solid 1px ${GRAY_300};
  border-radius: 6px;
  padding: 5px;
  flex-grow: 1;
`
