import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Navigation from '../index'


describe('component', () => {
  const containerProps = {
    title: 'Navigation title',
    links: [
      {
        id: 1,
        href: 'Link 1 href',
        label: 'Link 1 label',
      },
      {
        id: 2,
        href: 'Link 2 href',
        label: 'Link 2 label',
      },
    ],
  }

  it('renders with all props', () => {
    const container = shallow(
      <Navigation {...containerProps} />
    )

    expect(shallowToJson(container)).toMatchSnapshot()
  })
})
