import React from 'react'
import { mount, shallow } from 'enzyme'
import sinon from 'sinon'
import { shallowToJson } from 'enzyme-to-json'
import { CounterContainer } from '../index'


describe('component', () => {
  const containerProps = {
    increment: sinon.spy(),
    decrement: sinon.spy(),
    counterValue: 10,
  }

  it('renders with all props', () => {
    const container = shallow(
      <CounterContainer {...containerProps} />
    )

    expect(shallowToJson(container)).toMatchSnapshot()
  })

  it('increments counter', () => {
    const container = mount(<CounterContainer {...containerProps} />)
    container.find('button').at(0).simulate('click')
    expect(containerProps.increment.calledOnce).toEqual(true)
  })

  it('decrements counter', () => {
    const container = mount(<CounterContainer {...containerProps} />)
    container.find('button').at(1).simulate('click')
    expect(containerProps.decrement.calledOnce).toEqual(true)
  })
})
