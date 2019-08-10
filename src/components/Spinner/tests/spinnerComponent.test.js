import React from 'react'
import { shallow } from 'enzyme'
import SpinnerComponentTest from '../index'


describe('SpinnerComponentTest Component', () => {
  it('renders with all props', () => {
    const wrapper = shallow(
      <SpinnerComponentTest />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
