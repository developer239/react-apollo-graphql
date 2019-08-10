import React from 'react'
import { shallow } from 'enzyme'
import { theme } from 'styles'
import { StyledTextArea } from '../index'
import 'jest-styled-components'


describe('StyledTextArea Component', () => {
  it('has correct default styles', () => {
    const wrapper = shallow(
      <StyledTextArea theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
