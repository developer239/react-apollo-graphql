import React from 'react'
import { mount } from 'enzyme'
import { theme } from 'styles'
import 'jsdom-global/register'
import 'jest-styled-components'
import { Container } from '../index'


describe('Container Component', () => {
  it('has correct default styles', () => {
    const wrapper = mount(
      <Container theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
