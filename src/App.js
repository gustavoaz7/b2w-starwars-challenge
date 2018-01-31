import React, { Component } from 'react'

import Planet from './components/Planet/'
import Button from './components/Button/'
import ImageTitle from './components/ImageTitle/'
import Loading from './components/Loading/'
import getPlanetInfo from './util/fetchPlanet'

class App extends Component {
  state = {
    planet: {},
    loading: false
  }

  componentDidMount() {
    this.newPlanet()
  }
  
  newPlanet() {
    this.setState({ ...this.state, loading: true })

    getPlanetInfo()
    .then(res => {
      const planet = { 
        name: res.data.name,
        population: res.data.population,
        climate: res.data.climate,
        terrain: res.data.terrain,
        films: res.data.films
      }
      this.setState({ loading: false, planet })
    })
  }

  render() {
    return (
      <div>
        <ImageTitle />
        <Loading 
          text="Travelling to a new planet..." 
          hide={!this.state.loading} />
        <Planet 
          {...this.state.planet} 
          hide={this.state.loading} />
        <Button 
          text="Next" 
          handleClick={this.newPlanet.bind(this)} 
          hide={this.state.loading} />
      </div>
    )
  }
}

export default App