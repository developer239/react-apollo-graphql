import React from 'react'
import { mount } from 'enzyme'
import { theme } from 'styles'
import 'jest-styled-components'
import 'jsdom-global/register'
import { StyledButton } from '../index'


describe('StyledButton Component', () => {
  it('has correct default styles', () => {
    const wrapper = mount(
      <StyledButton theme={theme}>Button Text</StyledButton>,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('has correct :active background-color for bgType', () => {
    const wrapper = mount(
      <StyledButton
        bgType="success"
        theme={theme}
      >
        Button Text
      </StyledButton>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
