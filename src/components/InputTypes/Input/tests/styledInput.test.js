import React from 'react'
import { shallow } from 'enzyme'
import { theme } from 'styles'
import { StyledInput } from '../index'
import 'jest-styled-components'


describe('StyledInput Component', () => {
  it('has correct default styles', () => {
    const wrapper = shallow(
      <StyledInput theme={theme}>Button Text</StyledInput>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
