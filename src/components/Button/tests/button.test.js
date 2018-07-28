import React from 'react'
import { shallow } from 'enzyme'
import Button from '../index'


describe('Button Component', () => {
  it('renders with all props', () => {
    const wrapper = shallow(
      <Button bgType={'success'}>Text</Button>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
