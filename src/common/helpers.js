import React from 'react'
import { branch, renderComponent } from 'recompose'
import { Spinner, Error, NoData } from 'components'


export const showSpinnerWhileLoading = isLoading =>
  branch(
    isLoading,
    renderComponent(Spinner),
  )

export const showSpinnerWhileApolloLoading = () =>
  showSpinnerWhileLoading(props => props.data.loading)

export const showError = isError =>
  branch(
    isError,
    renderComponent(Error),
  )

export const showApolloError = () =>
  showError(props => props.data.error)

export const showNoData = isNoData => (message = 'No data') =>
  branch(
    isNoData,
    renderComponent(() => <NoData message={message} />),
  )
