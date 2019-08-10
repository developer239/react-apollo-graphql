import React from 'react'
import { mount } from 'enzyme'
import { theme } from 'styles'
import 'jsdom-global/register'
import 'jest-styled-components'
import { Spinner } from '../index'


describe('Spinner Component', () => {
  it('has correct default styles', () => {
    const wrapper = mount(
      <Spinner theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
