import React from 'react'
import { mount } from 'enzyme'
import { theme } from 'styles'
import { ThemeProvider } from 'styled-components'
import sinon from 'sinon'
import 'jest-styled-components'
import 'jsdom-global/register'
import NavBar, {
  Container,
  Content,
  Links,
  StyledLink,
} from '../index'


// Mock link component because it needs react router provider
jest.mock('../../Link', () => jest.fn().mockReturnValue(<span>mock link</span>))

describe('Navbar Components', () => {
  it('Container has correct default styles', () => {
    const wrapper = mount(
      <Container theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Content has correct default styles', () => {
    const wrapper = mount(
      <Content theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Links has correct default styles', () => {
    const wrapper = mount(
      <Links theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('StyledLink has correct default styles', () => {
    const wrapper = mount(
      <StyledLink theme={theme} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  describe('Navbar', () => {
    const toggleOpenHandler = sinon.fake()
    const fakeProps = {
      activeRoute: '/',
      isOpen: true,
      toggleOpen: toggleOpenHandler,
      links: [
        { id: 1, to: '/', label: 'Home' },
        { id: 2, to: '/first', label: 'First' },
        { id: 3, to: '/second', label: 'Second' },
      ],
    }

    it('renders with all props', () => {
      const wrapper = mount(
        <ThemeProvider theme={theme}>
          <NavBar {...fakeProps} />
        </ThemeProvider>,
      )
      expect(wrapper).toMatchSnapshot()
    })
  })
})
