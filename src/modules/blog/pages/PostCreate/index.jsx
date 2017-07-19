import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'
import { Grid, PageHeader, Alert } from 'react-bootstrap'
import update from 'immutability-helper'
import PostForm from '../../forms/Post'
import { createPost, queryAllPosts } from '../../qql'


class PostCreate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      errorText: '',
    }
  }

  handleFormSubmit(data) {
    return this.props.submit(data)
      .then(response => this.props.router.push(`/posts/${response.data.createPost.id}`))
      .catch(() => this.setState({ errorText: 'There was an error while creating your post.' }))
  }

  handleOnDismissAlert() {
    this.setState({ errorText: '' })
  }

  render() {
    const { errorText } = this.state
    return (
      <Grid>
        {errorText &&
        <Alert
          bsStyle="danger"
          onDismiss={() => this.handleOnDismissAlert()}
        >
          {errorText}
        </Alert>
        }
        <PageHeader>
          New post
        </PageHeader>
        <PostForm
          onSubmit={data => this.handleFormSubmit(data)}
        />
      </Grid>
    )
  }
}

PostCreate.propTypes = {
  submit: PropTypes.func,
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

const PostCreateWithGraphQL = compose(
  graphql(queryAllPosts),
  graphql(createPost, {
    props({ mutate }) {
      return {
        submit({ title, text }) {
          return mutate({
            variables: { title, text },
            optimisticResponse: {
              __typename: 'Mutation',
              createPost: {
                __typename: 'Post',
                text,
                title,
              },
            },
            updateQueries: {
              allPosts: (previousResult, { mutationResult }) => {
                if (mutationResult.data) {
                  const newPost = mutationResult.data.createPost
                  newPost.id = newPost.id || 'as654asdf13a2sdf456a'

                  return update(previousResult, {
                    allPosts: {
                      $push: [newPost],
                    },
                  })
                }

                return previousResult
              },
            },
          })
        },
      }
    },
  })
)(PostCreate)

export default PostCreateWithGraphQL
