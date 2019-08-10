import React from 'react'
import { mount } from 'enzyme'
import { theme } from 'styles'
import 'jsdom-global/register'
import 'jest-styled-components'
import { H1, H2, H3, P, HR, A } from '../index'


describe('Typography Components', () => {
  it('H1 has correct default styles', () => {
    const wrapper = mount(
      <H1 theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('H2 has correct default styles', () => {
    const wrapper = mount(
      <H2 theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('H3 has correct default styles', () => {
    const wrapper = mount(
      <H3 theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('P has correct default styles', () => {
    const wrapper = mount(
      <P theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('HR has correct default styles', () => {
    const wrapper = mount(
      <HR theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('A has correct default styles', () => {
    const wrapper = mount(
      <A theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
