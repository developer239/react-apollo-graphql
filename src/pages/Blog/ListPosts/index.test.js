import React from 'react'
import { waitForElement } from '@testing-library/react'
import { renderApp } from '../../../../test/utils/render'
import {
  ERROR_MESSAGE,
  fakeAllPostsError,
  fakeAllPostsSuccess,
} from '../../../../test/utils/gql-posts'
import App from '../../../app'
import { POSTS_LIST_TEST_ID, POST_IN_LIST_TEST_ID } from './index'
import { ROUTE_PATHS } from '../../../routes'

describe('[page] Posts', () => {
  it('should render correctly', () => {
    const renderer = renderApp(<App />, ROUTE_PATHS.listPosts)
    expect(renderer.getByTestId(POSTS_LIST_TEST_ID)).toBeTruthy()
  })

  describe('when loaded', () => {
    it('should handle error', async () => {
      const errorText = `Network error: ${ERROR_MESSAGE}`
      const { getByText } = renderApp(<App />, ROUTE_PATHS.listPosts, [
        fakeAllPostsError,
      ])

      await waitForElement(() => getByText(errorText))
      expect(getByText(errorText)).toBeTruthy()
    })

    it('should handle success', async () => {
      const { getAllByTestId } = renderApp(<App />, ROUTE_PATHS.listPosts, [
        fakeAllPostsSuccess,
      ])

      await waitForElement(() => getAllByTestId(POST_IN_LIST_TEST_ID))
      expect(getAllByTestId(POST_IN_LIST_TEST_ID).length).toEqual(
        fakeAllPostsSuccess.result.data.allPosts.length
      )
    })
  })
})
