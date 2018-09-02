import React from 'react'
import { mount } from 'enzyme'
import Provider from 'AppProvider'
import { mutation_mock, MOCK_MUTATION } from 'gql'
import ActionButton from '../index'


describe('ActionButton Component', () => {
  it('renders without error', () => {
    const wrapper = mount(
      <Provider mocks={[mutation_mock]}>
        <ActionButton mutation={MOCK_MUTATION} label="button label" />
      </Provider>,
    )
    expect(wrapper.find('button').text()).toEqual('button label')
  })

  it('renders loading state', () => {
    const wrapper = mount(
      <Provider mocks={[mutation_mock]}>
        <ActionButton mutation={MOCK_MUTATION} label="button label" />
      </Provider>,
    )
    wrapper.find('button').simulate('click')
    expect(wrapper.find('button').text()).toEqual('...')
  })
})
