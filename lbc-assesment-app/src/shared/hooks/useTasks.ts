import { useState } from 'react'
import { Task } from '../../constants/types'

export function useTasks(initialTasks: Task[]) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const onAddTask = (taskDescription: string) => {
    const newTask: Task = {
      description: taskDescription,
      creationDate: new Date(),
    }

    setTasks((prev) => [...prev, newTask])
  }

  const onRemoveTask = (taskIndex: number) => {
    setTasks((prev) => [
      ...prev.slice(0, taskIndex),
      ...prev.slice(taskIndex + 1),
    ])
  }

  return { tasks, onAddTask, onRemoveTask }
}
