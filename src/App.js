import React, { Component } from 'react'

import Planet from './components/Planet/'
import Button from './components/Button/'
import ImageTitle from './components/ImageTitle/'
import Loading from './components/Loading/'
import getPlanetInfo from './util/fetchPlanet'

class App extends Component {
  state = {
    planet: {},
    loaded: false
  }

  componentDidMount() {
    this.newPlanet()
  }
  
  newPlanet() {
    this.setState({ ...this.state, loaded: false })

    getPlanetInfo()
    .then(res => {
      const planet = { 
        name: res.data.name,
        population: res.data.population,
        climate: res.data.climate,
        terrain: res.data.terrain,
        films: res.data.films
      }
      this.setState({ loaded: true, planet })
    })
  }

  render() {
    if(this.state.loaded === true ) {
      return (
        <div>
          <ImageTitle />
          <Planet {...this.state.planet} />
          <Button text="Next" handleClick={this.newPlanet.bind(this)}/>
        </div>
      )
    } else {
      return (
        <div>
          <ImageTitle />
          <Loading text="Travelling to a new planet..." />
        </div>
      )
    }
  }
}

export default App