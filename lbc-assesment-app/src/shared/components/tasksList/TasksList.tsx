import { ChangeEvent, useState } from 'react'
import { Task } from '../../../constants/types'
import { pt } from '../../translations/pt'
import {
  RemoveButton,
  TaskDescription,
  TasksListHeader,
  TasksListHeaderLabel,
  TasksListWrapper,
  TaskWrapper,
} from './TasksLists.styled'

type TasksListProps = {
  tasks: Task[]
  onRemoveTask: (taskIndex: number) => void
}

const TasksList = ({ tasks, onRemoveTask }: TasksListProps) => {
  const [isTaskSelected, setIsTaskSelected] = useState<boolean[]>(
    [...new Array(tasks.length)].map((_elem: any) => false)
  )

  const onChangeSelectedTask = (taskIndex: number, isSelected: boolean) => {
    setIsTaskSelected((prev) => [
      ...prev.slice(0, taskIndex),
      isSelected,
      ...prev.slice(taskIndex + 1),
    ])
  }

  return (
    <TasksListWrapper>
      <TasksListHeader>
        <TasksListHeaderLabel flex={3}>
          {pt.components.tasks_list.task_label}
        </TasksListHeaderLabel>
        <TasksListHeaderLabel flex={2}>
          {pt.components.tasks_list.creation_date_label}
        </TasksListHeaderLabel>
        <TasksListHeaderLabel flex={2}>
          {pt.components.tasks_list.finished_data_label}
        </TasksListHeaderLabel>
        <TaskDescription flex={1}>
          <RemoveButton isHidden>
            {pt.components.tasks_list.remove_button_text}
          </RemoveButton>
        </TaskDescription>
      </TasksListHeader>
      {tasks.map((task: Task, taskIndex: number) => {
        return (
          <TaskWrapper key={`task_${taskIndex}`}>
            <TaskDescription flex={3}>
              <input
                type="checkbox"
                checked={isTaskSelected[taskIndex]}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  onChangeSelectedTask(taskIndex, event.target.checked)
                }
              />
              <span>{task.description}</span>
            </TaskDescription>
            <TaskDescription flex={2}>
              {task.creationDate.toDateString()}
            </TaskDescription>
            <TaskDescription flex={2}>
              {task.finishedDate ? task.finishedDate.toDateString() : '-'}
            </TaskDescription>
            <TaskDescription flex={1}>
              <RemoveButton onClick={() => onRemoveTask(taskIndex)}>
                {pt.components.tasks_list.remove_button_text}
              </RemoveButton>
            </TaskDescription>
          </TaskWrapper>
        )
      })}
    </TasksListWrapper>
  )
}

export default TasksList
