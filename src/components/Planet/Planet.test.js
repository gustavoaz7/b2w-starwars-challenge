import React from 'react'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Planet from './index'

describe('Planet component', () => {
  
  it('should show format population number', () => {
    const wrapper = shallow(<Planet name='Endor' population='30000000' climate='temperate'
      terrain='forests, mountains, lakes' films={['first']} hide={false} />)

    expect(wrapper.contains('30.000.000')).toEqual(true)
  })

  it('should show number of times appeared in a film', () => {

    const wrapper = shallow(<Planet name='Endor' population='30000000' climate='temperate'
      terrain='forests, mountains, lakes' films={['first', 'second']} hide={false} />)

    expect(wrapper.contains('Featured in 2 films')).toEqual(true)
  })

})