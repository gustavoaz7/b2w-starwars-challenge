import React from 'react'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Loading from './index'

describe('Loading component', () => {

  it('should show text message', () => {
    const textExample = 'On my way to a new planet...'
    const wrapper = shallow(<Loading text={textExample} hide={false} />)
    expect(wrapper.text()).toEqual(textExample)
  })

})