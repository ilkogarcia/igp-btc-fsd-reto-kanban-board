import React from 'react'
import PropTypes from 'prop-types'

const Edit = ({ value, onEdit = () => {}, ...props }) => {
  const checkEnter = (e) => {
    if (e.key === 'Enter') {
      finishEdit(e)
    }
  }

  const finishEdit = (e) => {
    const value = e.target.value
    if (onEdit) {
      onEdit(value)
    }
  }

  return (
      <input
        type='text'
        autoFocus={true}
        defaultValue={value}
        onBlur={finishEdit}
        onKeyDown={checkEnter}
        {...props}
      />
  )
}

export const Editable = ({ editing, value, onEdit, ...props }) => {
  return (editing)
    ? <Edit value={value} onEdit={onEdit} {...props} />
    : <span {...props}>{value}</span>
}

Editable.propTypes = {
  editing: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired
}

Edit.propTypes = {
  value: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default Editable
