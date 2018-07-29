import React from 'react'
import { shallow } from 'enzyme'
import { theme } from 'styles'
import 'jest-styled-components'
import { Spinner } from '../index'


describe('Spinner Component', () => {
  it('has correct default styles', () => {
    const wrapper = shallow(
      <Spinner theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
