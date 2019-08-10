import React from 'react'
import { shallow } from 'enzyme'
import { nl2br } from './typography'


describe('Typography', () => {
  describe('nl2br', () => {
    it('renders without any new lines', () => {
      const wrapper = shallow(
        <div>{`Some simple text.`}</div>
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('renders with new lines replaced by br elements', () => {
      const wrapper = shallow(
        <div>{nl2br(`Some simple

text.`)}</div>
      )
      expect(wrapper).toMatchSnapshot()
    })
  })
})
