import React from 'react'
import { mount } from 'enzyme'
import { theme } from 'styles'
import { StyledInput } from '../index'
import 'jsdom-global/register'
import 'jest-styled-components'


describe('StyledInput Component', () => {
  it('has correct default styles', () => {
    const wrapper = mount(
      <StyledInput theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
