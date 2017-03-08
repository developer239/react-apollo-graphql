import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import LoadingSpinner from '../index'


describe('component', () => {
  it('renders', () => {
    const component = shallow(
      <LoadingSpinner />
    )

    expect(shallowToJson(component)).toMatchSnapshot()
  })
})
