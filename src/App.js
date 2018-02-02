import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Planet from './components/Planet/'
import Button from './components/Button/'
import ImageTitle from './components/ImageTitle/'
import Loading from './components/Loading/'

import { getPlanet } from './actions/AppActions'

class App extends Component {

  componentDidMount() {
    this.props.getPlanet()
  }

  render() {
    const { loading, planet, getPlanet } = this.props

    return (
      <div>
        <ImageTitle />
        <Loading 
          text="Travelling to a new planet..." 
          hide={!loading} />
        <Planet 
          {...planet} 
          hide={loading} />
        <Button 
          text="Next" 
          handleClick={getPlanet} 
          hide={loading} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  planet: state.planet
})

const mapDispatchToProps = dispatch => bindActionCreators( { getPlanet }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)