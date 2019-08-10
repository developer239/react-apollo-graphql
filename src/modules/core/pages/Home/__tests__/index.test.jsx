import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Home from '../index'


describe('component', () => {
  it('renders', () => {
    const container = shallow(
      <Home />
    )

    expect(shallowToJson(container)).toMatchSnapshot()
  })
})
