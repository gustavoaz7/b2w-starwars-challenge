import React from 'react'
import PropTypes from 'prop-types'

import './Planet.css'

const Planet = (props) => (
  <div className={`grid ${props.hide ? 'hide' : ''}`}>
    <div className="grid-item grid-title grid-full-row"> {props.name} </div>
    <div className="grid-divisor"></div>
    <div className="grid-item"> Population </div>
    <div className="grid-item"> {props.population ? props.population.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : ''} </div>
    <div className="grid-item"> Climate </div>
    <div className="grid-item"> {props.climate} </div>
    <div className="grid-item"> Terrain </div>
    <div className="grid-item"> {props.terrain} </div>
    <div className="grid-item grid-full-row"> 
      {props.films ? 
        props.films.length === 0 ? 'Never featured in a film' : 
        `Featured in ${props.films.length} ${props.films.length > 1 ? 'films' : 'film'}`
      : ''}
    </div>
  </div>
)

Planet.propTypes = {
  hide: PropTypes.bool.isRequired,
  name: PropTypes.string,
  population: PropTypes.string,
  climate: PropTypes.string,
  terrain: PropTypes.string,
  films: PropTypes.arrayOf(PropTypes.string)
}

export default Planet