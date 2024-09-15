import { memo, useCallback, useState } from 'react'
import {
  AddTaskInputContainer,
  AddTaskWrapper,
} from './AddTaskComponent.styled'
import { pt } from '../../translations/pt'
import DefaultButton from '../buttons/defaultButton/DefaultButton'

type AddTaskComponentProps = {
  onAdd: (task: string) => void
}

const AddTaskComponent = ({ onAdd }: AddTaskComponentProps) => {
  const [input, setInput] = useState<string>('')

  const onChangeInput = useCallback((e: any) => {
    setInput(e.target.value)
  }, [])

  const onAddTask = () => {
    if (input.length > 0) onAdd(input)
  }

  return (
    <AddTaskWrapper>
      <AddTaskInputContainer>
        <span>{pt.components.add_task.title}</span>
        <input type="text" onChange={onChangeInput} value={input} />
      </AddTaskInputContainer>
      <DefaultButton
        onClick={onAddTask}
        text={pt.components.add_task.add_button}
      />
    </AddTaskWrapper>
  )
}

export default memo(AddTaskComponent)
