import React from 'react'
import { shallow } from 'enzyme'
import { theme } from 'styles'
import 'jest-styled-components'
import HamburgerComponent, { Hamburger, HamburgerLine } from '../Hamburger'


describe('Hamburger Components', () => {
  describe('Hamburger', () => {
    it('has correct default styles', () => {
      const wrapper = shallow(
        <Hamburger theme={theme} />,
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('has correct default styles when open', () => {
      const wrapper = shallow(
        <Hamburger isOpen={true} theme={theme} />,
      )
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('HamburgerLine', () => {
    it('has correct default styles', () => {
      const wrapper = shallow(
        <HamburgerLine theme={theme} />,
      )
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('HamburgerComponent', () => {
    it('renders with all props', () => {
      const wrapper = shallow(
        <HamburgerComponent
          isOpen
          toggleIsOpen={() => ({})}
        />,
      )
      expect(wrapper).toMatchSnapshot()
    })
  })
})
