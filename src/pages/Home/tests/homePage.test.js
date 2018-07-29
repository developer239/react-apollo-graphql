import React from 'react'
import { shallow } from 'enzyme'
import HomPage from '../index'


describe('HomPage Component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HomPage />)
    expect(wrapper).toMatchSnapshot()
  })
})
