import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

const Button = props => (
  <button className={`btn ${props.hide ? 'hide' : ''}`} onClick={props.handleClick}>
    {props.text}
  </button>
)

Button.propTypes = {
  hide: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Button