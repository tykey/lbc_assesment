import { createSlice } from '@reduxjs/toolkit'
import { Task } from '../../constants/types'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    value: [] as Task[],
  },
  reducers: {
    addTask: (state, action: { payload: Task; type: string }) => {
      state.value = [...state.value, action.payload]
    },
    removeTask: (state, action: { payload: number; type: string }) => {
      state.value = [
        ...state.value.slice(0, action.payload),
        ...state.value.slice(action.payload + 1),
      ]
    },
  },
})

export const { addTask, removeTask } = tasksSlice.actions

export default tasksSlice.reducer
