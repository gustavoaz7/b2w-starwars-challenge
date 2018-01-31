import React from 'react'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ImageTitle from './index'

describe('ImageTitle component', () => {

  it('renders without crashing', () => {
    shallow(<ImageTitle />)
  })
  
})