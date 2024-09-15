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
            <TaskDescription flex={2}>{task.description}</TaskDescription>
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
