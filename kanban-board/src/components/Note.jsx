import React from 'react'
import PropTypes from 'prop-types'

export const Note = ({ task, onDelete }) => {
  return (
    <div>
        <span>{ task }</span>
        <button onClick={onDelete}>x</button>
    </div>
  )
}

Note.propTypes = {
  task: PropTypes.string,
  onDelete: PropTypes.func
}

export default Note
