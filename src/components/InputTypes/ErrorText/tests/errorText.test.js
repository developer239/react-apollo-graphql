import React from 'react'
import { mount } from 'enzyme'
import { theme } from 'styles'
import 'jest-styled-components'
import 'jsdom-global/register'
import ErrorText from '../index'


describe('ErrorText Component', () => {
  it('has correct default styles', () => {
    const wrapper = mount(
      <ErrorText theme={theme}>Some Content</ErrorText>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
