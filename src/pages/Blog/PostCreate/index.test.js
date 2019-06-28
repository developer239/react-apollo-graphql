import React from 'react'
import { fireEvent } from '@testing-library/react'
import { renderApp } from '../../../../test/utils/render'
import { fakeCreatePostSuccess } from '../../../../test/utils/gql-posts'
import App from '../../../app'
import { POST_CREATE_TEST_ID } from './index'
import { ROUTE_PATHS } from '../../../routes'

const { createPost: POST } = fakeCreatePostSuccess.result.data

const fillCreatePostForm = renderer => {
  const titleElement = renderer.container.querySelector('input[name="title"]')
  const textElement = renderer.container.querySelector('textarea[name="text"]')
  const formSubmitButton = renderer.container.querySelector('button')

  fireEvent.change(titleElement, { target: { value: POST.title } })
  fireEvent.change(textElement, { target: { value: POST.text } })

  return {
    formSubmitButton,
    textElement,
    titleElement,
  }
}

describe('[page] Create Post', () => {
  it('should render correctly', () => {
    const renderer = renderApp(<App />, ROUTE_PATHS.createPost)
    expect(renderer.getByTestId(POST_CREATE_TEST_ID)).toBeTruthy()
  })

  // TODO: Change this to when on form submit -> should handle success/error
  it('should allow to fill in form', () => {
    const renderer = renderApp(<App />, ROUTE_PATHS.createPost)
    const { titleElement, textElement } = fillCreatePostForm(renderer)
    expect(titleElement.value).toEqual(POST.title)
    expect(textElement.value).toEqual(POST.text)
  })
})
