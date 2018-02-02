import React from 'react'

export default (props) => (
  <div className={`grid ${props.hide ? 'hide' : ''}`}>
    {props.children}
  </div>
)