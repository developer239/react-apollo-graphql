import React from 'react'
import { mount } from 'enzyme'
import Provider from 'AppProvider'
import { nl2br } from './typography'


describe('Typography', () => {
  describe('nl2br', () => {
    it('renders without any new lines', () => {
      const wrapper = mount(
        <Provider>
          <div>{`Some simple text.`}</div>
        </Provider>
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('renders with new lines replaced by br elements', () => {
      const wrapper = mount(
        <Provider>
          <div>{nl2br(`Some simple

text.`)}</div>
        </Provider>
      )
      expect(wrapper).toMatchSnapshot()
    })
  })
})
