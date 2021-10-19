import Link from 'next/link'
import { useState, useEffect } from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

// export const getStaticProps = async () => {
//   const reponse = await fetch(
//     `https://jsonplaceholder.typicode.com/users/1/todos`
//   )
//   const data = await reponse.json()
//   return {
//     props: {
//       todos: data,
//     },
//   }
// }

const HomePage = () => {
  // console.log(todos)
  
  return (
    <>
      <h1>Welcome</h1>
      {/* <TodoList todos={todos}/> */}
    </>
  )
}

export default HomePage
