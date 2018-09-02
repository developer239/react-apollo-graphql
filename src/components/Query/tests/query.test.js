import React from 'react'
import { mount } from 'enzyme'
import waitForExpect from 'wait-for-expect'
import Provider from 'AppProvider'
import { query_mock, query_mock_error, MOCK_QUERY } from 'gql'
import Query from '../index'


describe('Query Component', () => {
  it('renders loading state', () => {
    const wrapper = mount(
      <Provider mocks={[query_mock]}>
        <Query query={MOCK_QUERY} />
      </Provider>,
    )
    expect(wrapper.find('SpinnerComponent').length).toEqual(1)
  })

  it('renders final state', async () => {
    const wrapper = mount(
      <Provider mocks={[query_mock]}>
        <Query query={MOCK_QUERY}>
          {({ data }) => (
            <ul>
              {data.allPosts.map(item => <li key={item.id}>{item.id} {item.title}</li>)}
            </ul>
          )}
        </Query>
      </Provider>,
    )

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.find('ul li').length).toEqual(2)
    })
  })

  it('renders error state', async () => {
    const wrapper = mount(
      <Provider mocks={[query_mock_error]}>
        <Query query={MOCK_QUERY} />
      </Provider>,
    )

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.find('Message').text()).toEqual('Error! Network error: Error state.')
    })
  })
})
