import React from 'react'
import { shallow } from 'enzyme'
import { theme } from 'styles'
import 'jest-styled-components'
import { Container } from '../index'


describe('Container Component', () => {
  it('has correct default styles', () => {
    const wrapper = shallow(
      <Container theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
