import React, {useRef, useState} from 'react'

const AddTodo = () => {
  const [text, setText] = useState('')
  const inputRef = useRef()

  const submitHandler = (event)=>{
    event.preventDefault();
    setText(inputRef.current.value)
    
  }
  
  console.log(text)
  return (
    <form  onSubmit={submitHandler}>
      <label htmlFor='input' id='input'>
        Add Todo
      </label>
      <input type='text' required id='title' ref={inputRef} />
      <button>Add</button>
    </form>
  )
}

export default AddTodo
