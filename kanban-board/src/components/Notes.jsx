import React from 'react'
import PropTypes from 'prop-types'
import { Note } from './Note'

export const Notes = ({ notes, onDelete = () => {} }) => (
    <ul>
    {notes.map(({ id, task }) =>
        <li key={id}>
          <Note
            onDelete={onDelete.bind(null, id)}
            task={task} />
        </li>
    )}
    </ul>
)

Notes.propTypes = {
  notes: PropTypes.array,
  onDelete: PropTypes.func
}

export default Notes
