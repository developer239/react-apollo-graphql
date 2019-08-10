import React, { FC } from 'react'
import { IPageFormValues, PageForm } from 'modules/blog/forms/Page'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_PAGE_MUTATION, LIST_PAGES_QUERY } from 'modules/blog/gql'
import {
  CreatePage,
  CreatePageVariables,
} from 'modules/blog/gql/__generated__/CreatePage'
import { RouteComponentProps } from 'react-router'
import { ListPages } from 'modules/blog/gql/__generated__/ListPages'

export const CreatePagePage: FC<RouteComponentProps> = props => {
  const [createPage] = useMutation<CreatePage, CreatePageVariables>(
    CREATE_PAGE_MUTATION,
    {
      update(cache, { data: { createPage: newPage } }) {
        const { listPages } = cache.readQuery<ListPages>({
          query: LIST_PAGES_QUERY,
        })
        cache.writeQuery({
          query: LIST_PAGES_QUERY,
          data: { listPages: listPages.concat([newPage]) },
        })
      },
    }
  )

  const handleSubmit = async (values: IPageFormValues) => {
    const result = await createPage({ variables: { data: values } })
    if (result) {
      props.history.push(`/blog/${result.data.createPage.id}`)
    }
  }

  return (
    <div>
      <h1>Create Page</h1>
      <PageForm handleSubmit={handleSubmit} />
    </div>
  )
}
