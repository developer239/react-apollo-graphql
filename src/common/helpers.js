import { branch, renderComponent, withProps } from 'recompose'
import { Spinner, Error, NoData } from 'components'


export const showSpinnerWhileLoading = isLoading =>
  branch(
    isLoading,
    renderComponent(Spinner),
  )

export const showSpinnerWhileApolloLoading = () =>
  showSpinnerWhileLoading(props => props.data.loading)

const withApolloErrorMessage = withProps(
  props => ({ message: props.data.error.message }),
)

const ErrorComponent = withApolloErrorMessage(Error)

export const showError = isError =>
  branch(isError, renderComponent(ErrorComponent))

export const showApolloError = () =>
  showError(props => props.data.error)

const withCustomMessageProp = message => withProps(() => ({ message }))

export const showNoData = isNoData => (message = 'No data') =>
  branch(
    isNoData,
    renderComponent(withCustomMessageProp(message)(NoData)),
  )
