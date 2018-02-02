import React from 'react'
import PropTypes from 'prop-types'

import './Planet.css'
import Grid from '../../common/Grid'
import GridItem from '../../common/GridItem'
import GridDivisor from '../../common/GridDivisor'

const Planet = (props) => (
  <Grid hide={props.hide}>
    <GridItem title={true} fullRow={true} text={props.name} />
    <GridDivisor />
    <GridItem text="Population" />
    <GridItem text={props.population ? props.population.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : ''} />
    <GridItem text="Climate" />
    <GridItem text={props.climate} />
    <GridItem text="Terrain" />
    <GridItem text={props.terrain} />
    <GridItem fullRow={true} 
      text={props.films ? 
              props.films.length === 0 ? 'Never featured in a film' : 
              `Featured in ${props.films.length} ${props.films.length > 1 ? 'films' : 'film'}`
            : ''} />
  </Grid>
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