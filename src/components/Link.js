import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ onClick, active, children }) => {
  return (
    <button onClick={onClick} disabled={active}>
      {children}
    </button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Link
