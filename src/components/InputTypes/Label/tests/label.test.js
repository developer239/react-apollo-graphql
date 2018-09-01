import React from 'react'
import { mount } from 'enzyme'
import 'jsdom-global/register'
import 'jest-styled-components'
import Label from '../index'


describe('Label Component', () => {
  it('has correct default styles', () => {
    const wrapper = mount(
      <Label>Test Label</Label>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
