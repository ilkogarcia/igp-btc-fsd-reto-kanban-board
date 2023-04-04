import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Notes } from './components/Notes'
import './App.css'

export const App = () => {
  const notesData = [
    {
      id: uuidv4(),
      editing: false,
      task: 'Learn React'
    },
    {
      id: uuidv4(),
      editing: false,
      task: 'Do laundry'
    }
  ]

  const [notes, setNotes] = useState(notesData)

  useEffect(() => {
    console.log(notes)
  }, [notes])

  const addNote = () => {
    setNotes(
      [...notes,
        {
          id: uuidv4(),
          editing: false,
          task: 'New task'
        }
      ])
  }

  const activateNoteEdit = (id) => {
    setNotes(
      notes.map(note => {
        if (note.id === id) {
          note.editing = true
        }
        return note
      })
    )
  }

  const editNote = (id, task) => {
    setNotes(
      notes.map(note => {
        if (note.id === id) {
          note.editing = false
          note.task = task
        }
        return note
      })
    )
  }

  const deleteNote = (id, e) => {
    // Dejar de procesar eventos para poder editar
    e.stopPropagation()
    setNotes(
      notes.filter(note => note.id !== id)
    )
  }

  return (
    <main className='App'>
      <button onClick={() => addNote()}>
        + Add Note
      </button>
      <Notes
        notes={notes}
        onNoteClick={activateNoteEdit}
        onEdit={editNote}
        onDelete={deleteNote}
      />
    </main>
  )
}

export default App
