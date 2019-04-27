import React from 'react'
import { waitForElement } from 'react-testing-library'
import { renderApp } from '../../../../test/utils/render'
import {
  ERROR_MESSAGE,
  fakePostDetailError,
  fakePostDetailSuccess,
} from '../../../../test/utils/gql-posts'
import App from '../../../app'
import { ROUTE_PATHS } from '../../../routes'

describe('[page] Post Detail', () => {
  describe('when loaded', () => {
    it('should handle error', async () => {
      const errorText = `Network error: ${ERROR_MESSAGE}`
      const { getByText } = renderApp(<App />, ROUTE_PATHS.postDetail(1), [
        fakePostDetailError,
      ])

      await waitForElement(() => getByText(errorText))
      expect(getByText(errorText)).toBeTruthy()
    })

    it('should handle success', async () => {
      const postTitle = fakePostDetailSuccess.result.data.Post.title
      const { getByText } = renderApp(<App />, ROUTE_PATHS.postDetail(1), [
        fakePostDetailSuccess,
      ])

      await waitForElement(() => getByText(postTitle))
      expect(getByText(postTitle)).toBeTruthy()
    })
  })
})
