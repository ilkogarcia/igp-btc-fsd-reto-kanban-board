import React, { useState } from 'react'
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

export const App = () => {
  const [notes, setNotes] = useState(notesData)

  const addNote = () => {
    setNotes(
      [...notes,
        {
          id: uuidv4(),
          task: 'New task'
        }
      ])
  }

  const deleteNote = (id) => {
    setNotes(
      notes.filter(note => note.id !== id)
    )
  }

  return (
    <main className='App'>
      <button onClick={() => addNote()}>
        + Add Note
      </button>
      <Notes notes={notes} onDelete={deleteNote} />
    </main>
  )
}

export default App
