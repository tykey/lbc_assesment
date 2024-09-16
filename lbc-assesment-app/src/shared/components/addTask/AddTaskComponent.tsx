import { memo, useCallback, useState } from 'react'
import {
  AddTaskBottom,
  AddTaskInput,
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

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' && input !== '') onAddTask()
  }

  const onAddTask = () => {
    if (input.length > 0) {
      onAdd(input)
      setInput('')
    }
  }

  return (
    <AddTaskWrapper>
      <span>{pt.components.add_task.title}</span>
      <AddTaskBottom>
        <AddTaskInput
          type="text"
          onChange={onChangeInput}
          value={input}
          onKeyDown={handleKeyDown}
        />
        <DefaultButton
          onClick={onAddTask}
          text={pt.components.add_task.add_button}
          isDisabled={input === ''}
        />
      </AddTaskBottom>
    </AddTaskWrapper>
  )
}

export default memo(AddTaskComponent)
