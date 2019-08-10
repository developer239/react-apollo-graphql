import React from 'react'
import { shallow } from 'enzyme'
import NotFoundPage from '../index'


describe('NotFoundPage Component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
  })
})
