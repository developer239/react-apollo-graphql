import React from 'react'
import { fireEvent } from 'react-testing-library'
import { renderApp } from '../../../../test/utils/render'
import { fakeCreatePostSuccess } from '../../../../test/utils/gql-posts'
import App from '../../../app'

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
    const renderer = renderApp(<App />, '/posts/new')
    expect(renderer.getByTestId('page-create-post')).toBeTruthy()
  })

  // TODO: Change this to when on form submit -> should handle success/error
  it('should allow to fill in form', () => {
    const renderer = renderApp(<App />, '/posts/new')
    const { titleElement, textElement } = fillCreatePostForm(renderer)
    expect(titleElement.value).toEqual(POST.title)
    expect(textElement.value).toEqual(POST.text)
  })
})
