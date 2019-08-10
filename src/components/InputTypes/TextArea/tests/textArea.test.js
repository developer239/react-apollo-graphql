import React from 'react'
import { shallow } from 'enzyme'
import TextArea from '../index'


describe('Input Component', () => {
  const fakeProps = {
    id: 'fakeId',
    values: {
      fakeId: 'fakeValue',
    },
    placeholder: 'fake placeholder',
    handleChange: () => ({}),
    handleBlur: () => ({}),
  }

  it('renders with all props', () => {
    const wrapper = shallow(
      <TextArea
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
      <TextArea errors={{}} touched={{}} {...fakeProps} />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
