import React from 'react'
import { shallow } from 'enzyme'
import Link from '../index'


describe('Link Component', () => {
  it('renders with all props', () => {
    const wrapper = shallow(
      <Link to="/fake-link">Some Link</Link>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
