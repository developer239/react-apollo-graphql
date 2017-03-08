import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { PostListComponent } from '../index'


describe('component', () => {
  const listProps = {
    items: [
      {
        id: 1,
        title: 'Item title',
        text: 'Item text',
      },
    ],
  }

  it('renders with all props', () => {
    const component = shallow(
      <PostListComponent {...listProps} />
    )

    expect(shallowToJson(component)).toMatchSnapshot()
  })
})
