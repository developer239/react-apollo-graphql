import React from 'react'
import { mount } from 'enzyme'
import { theme } from 'styles'
import 'jest-styled-components'
import 'jsdom-global/register'
import Content from '../index'


describe('Content Component', () => {
  it('has correct default styles', () => {
    const wrapper = mount(
      <Content theme={theme}>Some Content</Content>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
