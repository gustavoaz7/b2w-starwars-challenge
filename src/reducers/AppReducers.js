import filterPlanetInfo from '../util/filterPlanetInfo'

const INITIAL_STATE = {
  loading: false,
  planet: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: action.payload }

    case 'NEW_PLANET':
      const { loading, planet } = action.payload
      return { ...state, loading , planet: filterPlanetInfo(planet) }
    
    default:
      return state
  }
}