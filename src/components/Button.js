import React from 'react'

export default props => (
  <button className="btn btn-lg btn-primary" onClick={props.handleClick}>
    {props.text}
  </button>
)