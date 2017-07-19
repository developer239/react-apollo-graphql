import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { graphql, compose } from 'react-apollo'
import { Grid, Alert, PageHeader } from 'react-bootstrap'
import update from 'immutability-helper'
import LoadingSpinner from '../../components/LoadingSpinner'
import LoadingError from '../../components/LoadingError'
import PostForm from '../../forms/Post'
import { queryAllPosts, queryPostDetail, updatePost, deletePost } from '../../qql'


class PostsBaseContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      errorText: '',
      successText: '',
    }
  }

  handleFormSubmit(data) {
    return this.props.updatePost({ variables: data })
      .then(() => this.setState({ successText: 'Your update request was successful.' }))
      .catch(() => this.setState({ errorText: 'There was an error while editing your post.' }))
  }

  handleDeleteButtonClick() {
    return this.props.deletePost({ id: this.props.data.Post.id })
      .then(() => this.props.router.push('/posts'))
      .catch(() => this.setState({ errorText: 'There was an error while deleting your post.' }))
  }

  handleOnDismissAlert(type) {
    switch (type) {
      case 'success':
        this.setState({ successText: '' })
        break
      case 'error':
        this.setState({ errorText: '' })
        break
      default:
        this.setState({ errorText: '', successText: '' })
    }
  }

  render() {
    const { data, data: { Post } } = this.props
    const { errorText, successText } = this.state

    if (data.loading) {
      return <LoadingSpinner />
    }

    if (data.error) {
      return <LoadingError />
    }

    return (
      <Grid>
        {errorText &&
        <Alert bsStyle="danger" onDismiss={() => this.handleOnDismissAlert('error')}>
          {errorText}
        </Alert>
        }
        {successText &&
        <Alert bsStyle="success" onDismiss={() => this.handleOnDismissAlert('success')}>
          {successText}
        </Alert>
        }
        <PageHeader>
          {Post.title}
          <Link to={`/posts/${Post.id}`}>
            <small>[detail]</small>
          </Link>
        </PageHeader>
        <PostForm
          onSubmit={formData => this.handleFormSubmit(formData)}
          initialValues={{ id: Post.id, title: Post.title, text: Post.text }}
          handleDelete={() => this.handleDeleteButtonClick()}
        />
      </Grid>
    )
  }
}

PostsBaseContainer.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    Post: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  }).isRequired,
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  updatePost: PropTypes.func,
  deletePost: PropTypes.func,
}

const PostsBaseContainerWithGraphQL = compose(
  graphql(queryAllPosts),
  graphql(queryPostDetail, {
    options: ownProps => ({
      variables: {
        id: ownProps.params.postId,
      },
    }),
  }),
  graphql(updatePost, { name: 'updatePost' }),
  graphql(deletePost, {
    props: ({ mutate }) => ({
      deletePost: ({ id }) => mutate({
        variables: { id },
        optimisticResponse: {
          __typename: 'Mutation',
          deletePost: {
            __typename: 'Mutation',
            id,
          },
        },
        updateQueries: {
          allPosts: (previousResult, { mutationResult }) => {
            if (mutationResult.data) {
              const postIndex = previousResult
                .allPosts
                .findIndex(item => item.id === mutationResult.data.deletePost.id)
              return update(previousResult, {
                allPosts: {
                  $unshift: [[postIndex]],
                },
              })
            }
            return previousResult
          },
        },
      }),
    }),
  })
)(PostsBaseContainer)

export default PostsBaseContainerWithGraphQL
