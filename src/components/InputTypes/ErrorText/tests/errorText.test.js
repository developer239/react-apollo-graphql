import React from 'react'
import { shallow } from 'enzyme'
import { theme } from 'styles'
import 'jest-styled-components'
import ErrorText from '../index'


describe('ErrorText Component', () => {
  it('has correct default styles', () => {
    const wrapper = shallow(
      <ErrorText theme={theme}>Some Content</ErrorText>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
