import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/features/todosSlice'
import { Button, Input, AddTodoContainer } from './Components.styles'
import { useRouter } from 'next/router'
const AddTodo = () => {
  const inputRef = useRef()
  const dispatch = useDispatch()
  const router = useRouter()
  const userId = router.query.id
  const { todosList } = useSelector((state) => state.todos)

  const submitHandler = (event) => {
    event.preventDefault()
    let todoId
    if (todosList.length > 0) {
      todoId = todosList[todosList.length - 1].id + 1
    } else {
      todoId = 1
    }
    const text = inputRef.current.value
    dispatch(addTodo({ id: todoId, title: text, userId: userId }))
    inputRef.current.value = ''
  }

  return (
    <>
      {+userId <= 10 ? (
        <AddTodoContainer onSubmit={submitHandler}>
          <Input
            type='text'
            name='addtodo'
            required
            id='title'
            ref={inputRef}
          />
          <Button>Add Task</Button>
        </AddTodoContainer>
      ):
      <h3> No user data</h3>
      }
    </>
  )
}

export default AddTodo
