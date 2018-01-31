import React from 'react'
import PropTypes from 'prop-types'

import './Loading.css'

const Loading = props => (
  <div className="loading">{props.text}</div>
)

Loading.propTypes = {
  text: PropTypes.string
}

export default Loading