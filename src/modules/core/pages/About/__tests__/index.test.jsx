import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import About from '../index'


describe('component', () => {
  it('renders', () => {
    const container = shallow(
      <About />
    )

    expect(shallowToJson(container)).toMatchSnapshot()
  })
})
