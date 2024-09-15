import styled from '@emotion/styled'
import {
  ADD_TASK_INPUT_CONTAINER_GAP,
  ADD_TASK_WRAPPER_GAP,
} from '../../../constants/dimensions'

export const AddTaskWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: end;
  gap: ${ADD_TASK_WRAPPER_GAP};
`

export const AddTaskInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: ${ADD_TASK_INPUT_CONTAINER_GAP};

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`
