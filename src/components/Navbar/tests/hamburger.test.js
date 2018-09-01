import React from 'react'
import { mount, shallow } from 'enzyme'
import { theme } from 'styles'
import 'jsdom-global/register'
import 'jest-styled-components'
import HamburgerComponent, { Hamburger, HamburgerLine } from '../Hamburger'


describe('Hamburger Components', () => {
  describe('Hamburger', () => {
    it('has correct default styles', () => {
      const wrapper = mount(
        <Hamburger theme={theme} />,
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('has correct default styles when open', () => {
      const wrapper = mount(
        <Hamburger isOpen theme={theme} />,
      )
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('HamburgerLine', () => {
    it('has correct default styles', () => {
      const wrapper = mount(
        <HamburgerLine theme={theme} />,
      )
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('HamburgerComponent', () => {
    it('renders with all props', () => {
      const wrapper = shallow(
        <HamburgerComponent
          theme={theme}
          isOpen
          toggleIsOpen={() => ({})}
        />,
      )
      expect(wrapper).toMatchSnapshot()
    })
  })
})
