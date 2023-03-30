import React from 'react'
import PropTypes from 'prop-types'
import { Note } from './Note'

export const Notes = ({ notes }) => (
    <ul>
    {notes.map(note =>
        <li key={note.id}><Note task={note.task} /></li>
    )}
    </ul>
)

Notes.propTypes = {
  notes: PropTypes.array
}

export default Notes
