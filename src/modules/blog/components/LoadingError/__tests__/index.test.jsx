import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import LoadingError from '../index'


describe('component', () => {
  it('renders', () => {
    const component = shallow(
      <LoadingError />
    )

    expect(shallowToJson(component)).toMatchSnapshot()
  })
})
