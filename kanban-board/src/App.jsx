import React, { useState, useEffect } from 'react'
import Notes from './components/Notes'
import { v4 as uuidv4 } from 'uuid'

import './App.css'

const notesData = [
  {
    id: uuidv4(),
    task: 'Learn React'
  },
  {
    id: uuidv4(),
    task: 'Do laundry'
  }
]
const addNote = () => {
  // Add a note to the array
  notesData.push({
    id: uuidv4(),
    task: 'New task'
  })
}

export const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    addNote()
  }

  return (
    <main className='App'>
      <button onClick={() => handleClick()}>+ Add Note</button>
      <Notes notes={notesData}/>
    </main>
  )
}

export default App
