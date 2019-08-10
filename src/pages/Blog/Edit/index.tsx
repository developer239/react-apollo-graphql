import React, { FC } from 'react'
import { IPageFormValues, PageForm } from 'modules/blog/forms/Page'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { PAGE_DETAIL_QUERY, UPDATE_PAGE_MUTATION } from 'modules/blog/gql'
import { RouteComponentProps } from 'react-router'
import { Loader } from 'components/Loader'
import { ErrorComponent } from 'components/Error'
import {
  UpdatePage,
  UpdatePageVariables,
} from 'modules/blog/gql/__generated__/UpdatePage'
import { PageDetail } from 'modules/blog/gql/__generated__/PageDetail'

export const EditPagePage: FC<
  RouteComponentProps<{ pageId: string }>
> = props => {
  const pageId = Number(props.match.params.pageId)
  const { data, loading, error } = useQuery<PageDetail>(PAGE_DETAIL_QUERY, {
    variables: { id: pageId },
  })
  const [updatePage] = useMutation<UpdatePage, UpdatePageVariables>(
    UPDATE_PAGE_MUTATION
  )

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorComponent>{error.message}</ErrorComponent>
  }

  const handleSubmit = async (values: IPageFormValues) => {
    const result = await updatePage({
      variables: { data: { id: pageId, ...values } },
    })
    if (result) {
      props.history.push(`/blog/${result.data.updatePage.id}`)
    }
  }

  return (
    <div>
      <h1>Edit Page</h1>
      <PageForm
        handleSubmit={handleSubmit}
        initialValues={{
          id: pageId,
          title: data.pageDetail.title,
          text: data.pageDetail.text,
        }}
      />
    </div>
  )
}
