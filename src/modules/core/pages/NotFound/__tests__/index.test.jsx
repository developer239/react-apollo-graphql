import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import NotFound from '../index'


describe('component', () => {
  it('renders', () => {
    const container = shallow(
      <NotFound />
    )

    expect(shallowToJson(container)).toMatchSnapshot()
  })
})
