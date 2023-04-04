import React from 'react'
import PropTypes from 'prop-types'
import { Note } from './Note'
import { Editable } from './Editable'

export const Notes = ({ notes, onNoteClick = () => {}, onEdit = () => {}, onDelete = () => {} }) => {
  return (
    <ul>
      {notes.map(({ id, editing, task }) =>
        <li key={id}>
          <Note onClick={onNoteClick.bind(null, id)}>
            <Editable
              editing={editing}
              value={task}
              onEdit={onEdit.bind(null, id)}
            />
            <button onClick={onDelete.bind(null, id)}>x</button>
          </Note>
        </li>
      )}
    </ul>
  )
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired,
  onNoteClick: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Notes
