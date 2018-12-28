import React from 'react'
import { mount } from 'enzyme'
import waitForExpect from 'wait-for-expect'
import Provider from 'AppProvider'
import { query_mock, MOCK_QUERY } from 'gql'
import Query from '../index'


describe('Query Component', () => {
  it('renders loading state', () => {
    const wrapper = mount(
      <Provider mocks={[query_mock]}>
        <Query query={MOCK_QUERY} />
      </Provider>,
    )
    const isSpinnerVisible = wrapper.find('div').length > 0
    expect(isSpinnerVisible).toEqual(true)
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
})
