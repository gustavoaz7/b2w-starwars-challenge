import React from 'react'
import PropTypes from 'prop-types'

const Planet = (props) => (
  <div className="grid">
    <div className="grid-item grid-title grid-full-row"> {props.name} </div>
    <div className="grid-divisor"></div>
    <div className="grid-item"> Population </div>
    <div className="grid-item"> {props.population.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")} </div>
    <div className="grid-item"> Climate </div>
    <div className="grid-item"> {props.climate} </div>
    <div className="grid-item"> Terrain </div>
    <div className="grid-item"> {props.terrain} </div>
    <div className="grid-item grid-full-row"> Featured in {props.films.length} {props.films.length > 1 ? 'films' : 'film'} </div>
  </div>
)

Planet.propTypes = {
  name: PropTypes.string,
  population: PropTypes.string,
  climate: PropTypes.string,
  terrain: PropTypes.string,
  films: PropTypes.arrayOf(PropTypes.string)
}

export default Planet