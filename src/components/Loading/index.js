import React from 'react'
import PropTypes from 'prop-types'

import './Loading.css'

const Loading = props => (
  <div className={`loading ${props.hide ? 'hide' : ''}`}>{props.text}</div>
)

Loading.propTypes = {
  hide: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Loading