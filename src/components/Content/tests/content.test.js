import React from 'react'
import { shallow } from 'enzyme'
import { theme } from 'styles'
import 'jest-styled-components'
import Content from '../index'


describe('Content Component', () => {
  it('has correct default styles', () => {
    const wrapper = shallow(
      <Content theme={theme}>Some Content</Content>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
