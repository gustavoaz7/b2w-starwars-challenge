import React from 'react'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Button from './index'

describe('Button component', () => {

  it('should render passed in text', () => {
    const button = shallow(<Button text='next' handleClick={() => console.log('handling click')} hide={false} />)
    expect(button.text()).toEqual('next')
  })

})