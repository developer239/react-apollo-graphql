import { RenderResult, fireEvent } from '@testing-library/react'

export const changeInput = (renderer: RenderResult) => (
  name: string,
  value: string | number
) => {
  const $element = renderer.container.querySelector(`input[name="${name}"]`)
  fireEvent.change($element, { target: { value } })
}

export const changeTextarea = (renderer: RenderResult) => (
  name: string,
  value: string | number
) => {
  const $element = renderer.container.querySelector(`textarea[name="${name}"]`)
  fireEvent.change($element, { target: { value } })
}

export const submitForm = (renderer: RenderResult) => () => {
  const $element = renderer.container.querySelector('button[type="submit"]')
  fireEvent.click($element)
}
