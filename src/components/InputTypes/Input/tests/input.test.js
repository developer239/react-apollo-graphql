import React from 'react'
import { shallow } from 'enzyme'
import Input from '../index'


describe('Input Component', () => {
  const fakeProps = {
    id: 'fakeId',
    type: 'text',
    values: {
      fakeId: 'fakeValue',
    },
    placeholder: 'fake placeholder',
    handleChange: () => ({}),
    handleBlur: () => ({}),
  }

  it('renders with all props', () => {
    const wrapper = shallow(
      <Input
        touched={{
          fakeId: true,
        }}
        errors={{
          fakeId: 'fake error message',
        }}
        {...fakeProps}
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders without error message', () => {
    const wrapper = shallow(
      <Input errors={{}} touched={{}} {...fakeProps} />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
