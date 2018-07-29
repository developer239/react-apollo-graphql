import React from 'react'
import { shallow } from 'enzyme'
import { theme } from 'styles'
import 'jest-styled-components'
import { H1, H2, H3, P, HR, StyledA, A } from '../index'


describe('Typography Components', () => {
  it('H1 has correct default styles', () => {
    const wrapper = shallow(
      <H1 theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('H2 has correct default styles', () => {
    const wrapper = shallow(
      <H2 theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('H3 has correct default styles', () => {
    const wrapper = shallow(
      <H3 theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('P has correct default styles', () => {
    const wrapper = shallow(
      <P theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('HR has correct default styles', () => {
    const wrapper = shallow(
      <HR theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('StyledA has correct default styles', () => {
    const wrapper = shallow(
      <StyledA theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('A has correct default styles', () => {
    const wrapper = shallow(
      <A theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
