import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTaskActions } from '../hooks/useTaskActions'
import { useRouter } from 'next/router'
import { getTodos } from '../redux/features/todosSlice'
import { Button, TodoContainer } from './Components.styles'
const TodoItem = () => {
  const router = useRouter()
  const userId = router.query.id
  const dispatch = useDispatch()
  const { todosList, status } = useSelector((state) => state.todos)
  const { finishTask, removeTask } = useTaskActions()

  useEffect(() => {
    dispatch(getTodos(userId))
  }, [userId, dispatch])

  return (
    <div>
      {todosList.map((todo, idx) => (
        <TodoContainer
          key={idx}
          style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              color: todo.completed && 'lightgray',
              fontStyle: todo.completed && 'italic',
              flex: 1,
            }}>
            <h4>{todo.title.charAt(0).toUpperCase() + todo.title.slice(1)} </h4>
          </div>

          <label htmlFor='check'>
            <input
              type='checkbox'
              id='check'
              checked={todo.completed}
              onChange={(e) => finishTask(e, idx)}
            />
          </label>
          <Button onClick={() => removeTask(todo.id)}>Remove</Button>
        </TodoContainer>
      ))}
    </div>
  )
}

export default TodoItem
