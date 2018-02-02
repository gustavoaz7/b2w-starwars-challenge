import React from 'react'

export default (props) => (
  <div className={`grid-item ${props.title ? 'grid-title' : ''} ${props.fullRow ? 'grid-full-row' : ''}`}>
    {props.text}
  </div>
)