import axios from 'axios'

import generatePlanetURL from '../util/fetchPlanet'

export function getPlanet() {
  return dispatch => {
    dispatch(load())
    axios.get(generatePlanetURL())
      .then(res => setTimeout(() => dispatch({ type: 'NEW_PLANET', payload: { loading: false, planet: res } }), 500))
  }
}

export function load() {
  return {
    type: 'LOADING',
    payload: true
  }
}