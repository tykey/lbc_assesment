import { useEffect, useState } from 'react'
import { Task } from '../../constants/types'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../store/store'
import { addTask, removeTask } from '../slices/tasksSlice'

export function useTasks() {
  const dispatch = useDispatch()

  const tasks: Task[] = useSelector((state: IRootState) => state.tasks.value)

  const onAddTask = (taskDescription: string) => {
    const newTask: Task = {
      description: taskDescription,
      creationDate: new Date(),
      isFinished: false,
    }

    dispatch(addTask(newTask))
  }

  const onRemoveTask = (taskIndex: number) => {
    dispatch(removeTask(taskIndex))
  }

  return { tasks, onAddTask, onRemoveTask }
}
