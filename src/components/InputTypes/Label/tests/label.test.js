import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import Label from '../index'


describe('Label Component', () => {
  it('has correct default styles', () => {
    const wrapper = shallow(
      <Label>Test Label</Label>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
