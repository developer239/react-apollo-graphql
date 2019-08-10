import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { H1 } from 'components/Typography/H1'
import { Loader } from 'components/Loader'
import { ErrorComponent } from 'components/Error'
import { IPageFormValues, PageForm } from 'modules/blog/forms/Page'
import { usePageDetail } from 'modules/blog/hooks/usePageDetail'
import { useUpdatePage } from 'modules/blog/hooks/useUpdatePage'

export const EditPagePage: FC<
  RouteComponentProps<{ pageId: string }>
> = props => {
  const pageId = Number(props.match.params.pageId)
  const { data, loading, error } = usePageDetail({ pageId })
  const [updatePage] = useUpdatePage()

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
    <>
      <H1>Edit Page</H1>
      <PageForm
        handleSubmit={handleSubmit}
        initialValues={{
          id: pageId,
          title: data.pageDetail.title,
          text: data.pageDetail.text,
        }}
      />
    </>
  )
}
