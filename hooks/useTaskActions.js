import { useDispatch } from 'react-redux'
import { markCompleted, removeTodo } from '../redux/features/todosSlice'

export const useTaskActions = () => {
  const dispatch = useDispatch()

  const finishTask = (e, idx) => {
    let taskStatus = e.target.checked

    dispatch(markCompleted({ idx: idx, completed: taskStatus }))
  }

  const removeTask = (id) => {
    dispatch(removeTodo(id))
  }  
  return {
    finishTask,
    removeTask
  }
}

export default useTaskActions
