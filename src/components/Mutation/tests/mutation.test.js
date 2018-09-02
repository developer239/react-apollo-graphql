import React from 'react'
import { mount } from 'enzyme'
import Provider from 'AppProvider'
import { mutation_mock, MOCK_MUTATION } from 'gql'
import Mutation from '../index'


describe('Mutation Component', () => {
  it('renders without error', () => {
    const wrapper = mount(
      <Provider mocks={[mutation_mock]}>
        <Mutation mutation={MOCK_MUTATION}>
          {(mutate) => <button onClick={mutate}>button</button>}
        </Mutation>
      </Provider>,
    )
    expect(wrapper.find('button').text()).toEqual('button')
  })

  it('renders loading state', () => {
    const wrapper = mount(
      <Provider mocks={[mutation_mock]}>
        <Mutation mutation={MOCK_MUTATION}>
          {(mutate) => <button onClick={mutate}>button</button>}
        </Mutation>
      </Provider>,
    )
    wrapper.find('button').simulate('click')
    wrapper.update()
    expect(wrapper.find('SpinnerComponent').length).toEqual(1)
  })

  // TODO: Make this work
  // it('renders error state', async () => {
  //   const wrapper = mount(
  //     <Provider mocks={[mutation_mock_error]}>
  //       <Mutation mutation={MOCK_MUTATION}>
  //         {(mutate) => <button onClick={mutate}>button</button>}
  //       </Mutation>
  //     </Provider>,
  //   )
  //   wrapper.find('button').simulate('click')
  //   await waitForExpect(() => {
  //     wrapper.instance().forceUpdate()
  //     expect(wrapper).toMatchSnapshot()
  //   })
  // })
})
