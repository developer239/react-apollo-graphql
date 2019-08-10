import React from 'react'
import { waitForElement } from 'react-testing-library'
import * as Page from './index'
import { renderApp } from '../../../../test/utils/render'
import {
  ERROR_MESSAGE,
  fakeAllPostsError,
  fakeAllPostsSuccess,
} from '../../../../test/utils/gql-posts'

describe('[page] Posts', () => {
  it('should render correctly', () => {
    const renderer = renderApp(<Page.ListPostsPage />, '/posts')
    expect(renderer.getByTestId('page-list-posts')).toBeTruthy()
  })

  describe('when loaded', () => {
    it('should handle error', async () => {
      const errorText = `Network error: ${ERROR_MESSAGE}`
      const { getByText } = renderApp(<Page.ListPostsPage />, '/posts', [
        fakeAllPostsError,
      ])

      await waitForElement(() => getByText(errorText))
      expect(getByText(errorText)).toBeTruthy()
    })

    it('should handle success', async () => {
      const { getAllByTestId } = renderApp(<Page.ListPostsPage />, '/posts', [
        fakeAllPostsSuccess,
      ])

      await waitForElement(() => getAllByTestId('post-in-list'))
      expect(getAllByTestId('post-in-list').length).toEqual(
        fakeAllPostsSuccess.result.data.allPosts.length
      )
    })
  })
})
