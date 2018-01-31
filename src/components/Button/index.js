import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

const Button = props => (
  <button className="btn" onClick={props.handleClick}>
    {props.text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func
}

export default Button