import { useState } from 'react'
import './App.css'
import UseStateBP,{ Form, TodoList } from './Hooks/useStateBP'

function App() {

  return (
    <div>
      <UseStateBP />
      <br />
      <Form />
      <br />
      <TodoList />
    </div>
  )
}

export default App



