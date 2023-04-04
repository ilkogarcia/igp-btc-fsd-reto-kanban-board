import React from 'react'
import PropTypes from 'prop-types'

export const Note = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

Note.propTypes = {
  children: PropTypes.any.isRequired
}

export default Note
