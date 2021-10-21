import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getTodos = createAsyncThunk('todos/getTodos', async (userId) => {
   
    const { data } = await axios.get(`/api/${userId}`).catch(function (error) {
      console.log(error.toJSON());
    });
    return data
    

})

const initialState = {
  status: null,
  todosList: [],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, {payload}) => {
      payload.completed = false
      state.todosList.push(payload)
    },
    removeTodo: (state, { payload }) => {
      state.todosList = state.todosList.filter(
        (todo) => todo.id !== payload
      )
    },
    markCompleted: (state, { payload }) => {
      const {idx, completed} = payload
      state.todosList[idx].completed = completed
    },
  },
  extraReducers: {
    [getTodos.pending]: (state, action) => {
      state.status = 'Loading'
    },
    [getTodos.fulfilled]: (state, { payload }) => {
      state.status = 'Success'

      state.todosList = payload
    },
    [getTodos.rejected]: (state, action) => {
      state.status = 'Failed'
    },
  },
})

export const { addTodo,removeTodo, markCompleted } = todosSlice.actions

export default todosSlice.reducer
