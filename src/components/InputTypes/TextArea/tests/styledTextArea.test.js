import React from 'react'
import { mount } from 'enzyme'
import { theme } from 'styles'
import { StyledTextArea } from '../index'
import 'jsdom-global/register'
import 'jest-styled-components'


describe('StyledTextArea Component', () => {
  it('has correct default styles', () => {
    const wrapper = mount(
      <StyledTextArea theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
