import React from 'react'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })
})
