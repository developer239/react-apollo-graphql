import React from 'react'
import { shallow } from 'enzyme'
import { theme } from 'styles'
import 'jest-styled-components'
import { StyledButton } from '../index'


describe('StyledButton Component', () => {
  it('has correct default styles', () => {
    const wrapper = shallow(
      <StyledButton theme={theme}>Button Text</StyledButton>,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('has correct :active background-color for bgType', () => {
    const wrapper = shallow(
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
