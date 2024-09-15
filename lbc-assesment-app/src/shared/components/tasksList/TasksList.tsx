import { ChangeEvent, useState } from 'react'
import { Task } from '../../../constants/types'
import { pt } from '../../translations/pt'
import {
  TaskDescription,
  TasksListHeader,
  TasksListHeaderLabel,
  TasksListWrapper,
  TaskWrapper,
} from './TasksLists.styled'

type TasksListProps = {
  tasks: Task[]
}

const TasksList = ({ tasks }: TasksListProps) => {
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
        <TasksListHeaderLabel flex={2}>
          {pt.components.tasks_list.task_label}
        </TasksListHeaderLabel>
        <TasksListHeaderLabel flex={1}>
          {pt.components.tasks_list.creation_date_label}
        </TasksListHeaderLabel>
        <TasksListHeaderLabel flex={1}>
          {pt.components.tasks_list.finished_data_label}
        </TasksListHeaderLabel>
      </TasksListHeader>
      {tasks.map((task: Task, taskIndex: number) => {
        return (
          <TaskWrapper key={`task_${taskIndex}`}>
            <TaskDescription flex={2}>
              <input
                type="checkbox"
                checked={isTaskSelected[taskIndex]}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  onChangeSelectedTask(taskIndex, event.target.checked)
                }
              />
              <span>{task.description}</span>
            </TaskDescription>
            <TaskDescription flex={1}>
              {task.creationDate.toDateString()}
            </TaskDescription>
            <TaskDescription flex={1}>
              {task.finishedDate ? task.finishedDate.toDateString() : '-'}
            </TaskDescription>
          </TaskWrapper>
        )
      })}
    </TasksListWrapper>
  )
}

export default TasksList
