import React from 'react'
import { shallow } from 'enzyme'
import Message from '../index'


describe('Message Component', () => {
  it('renders with all props', () => {
    const wrapper = shallow(
      <Message type="success" text="Fake Message" />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
