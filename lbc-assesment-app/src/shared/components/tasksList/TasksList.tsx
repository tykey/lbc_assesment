import { ChangeEvent, useContext, useState } from 'react'
import { Task } from '../../../constants/types'
import { pt } from '../../translations/pt'
import {
  FinishedDiv,
  NoResultsSpan,
  RemoveButton,
  TaskDescription,
  TasksListHeader,
  TasksListHeaderLabel,
  TasksListWrapper,
  TaskWrapper,
} from './TasksLists.styled'
import { useDispatch } from 'react-redux'
import { toggleFinishedTask } from '../../slices/tasksSlice'
import { PRIMARY_COLOR } from '../../../constants/colors'
import { ToastContext } from '../../../App'
import { ToastType } from '../toast/Toast'
import { formatDate } from '../../../constants/util'

type TasksListProps = {
  tasks: Task[]
  onRemoveTask: (taskIndex: number) => void
}

const TasksList = ({ tasks, onRemoveTask }: TasksListProps) => {
  const dispatch = useDispatch()
  const toast = useContext(ToastContext)

  const toggleIsFinished = (
    taskIndex: number,
    isCurrentlyFinished: boolean
  ) => {
    dispatch(toggleFinishedTask(taskIndex))

    if (isCurrentlyFinished)
      toast.show(
        ToastType.Success,
        pt.components.tasks_list.finished_success,
        4
      )
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
                checked={task.isFinished}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  toggleIsFinished(taskIndex, event.target.checked)
                }
                style={{ accentColor: PRIMARY_COLOR }}
              />
              <span
                style={{
                  textDecoration: task.isFinished ? 'line-through' : 'none',
                }}
              >
                {task.description}
              </span>
              <FinishedDiv isFinished={task.isFinished}>
                {pt.components.tasks_list.finished_task}
              </FinishedDiv>
            </TaskDescription>
            <TaskDescription flex={2}>
              {formatDate(new Date(task.creationDate))}
            </TaskDescription>
            <TaskDescription flex={2}>
              {task.finishedDate
                ? formatDate(new Date(task.finishedDate))
                : '-'}
            </TaskDescription>
            <TaskDescription flex={1}>
              <RemoveButton onClick={() => onRemoveTask(taskIndex)}>
                {pt.components.tasks_list.remove_button_text}
              </RemoveButton>
            </TaskDescription>
          </TaskWrapper>
        )
      })}
      {tasks.length === 0 && (
        <NoResultsSpan>{pt.components.tasks_list.no_results}</NoResultsSpan>
      )}
    </TasksListWrapper>
  )
}

export default TasksList
