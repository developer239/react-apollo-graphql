import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { FormikActions } from 'formik'
import { message } from 'antd'
import { H1 } from 'components/Typography/H1'
import { Loader } from 'components/Loader'
import { ErrorAlert } from 'components/ErrorAlert'
import { IPageFormValues, PageForm } from 'modules/blog/forms/Page'
import { usePageDetail } from 'modules/blog/hooks/usePageDetail'
import { useUpdatePage } from 'modules/blog/hooks/useUpdatePage'

export const PAGE_EDIT_TEST_ID = 'edit-page'

export const EditPagePage: FC<
  RouteComponentProps<{ pageId: string }>
> = props => {
  const pageId = Number(props.match.params.pageId)
  const { data, loading, error: loadingError } = usePageDetail({ pageId })
  const [updatePage] = useUpdatePage()

  if (loadingError) {
    return <ErrorAlert>{loadingError.message}</ErrorAlert>
  }

  if (loading) {
    return <Loader />
  }

  const handleSubmit = async (
    values: IPageFormValues,
    { setSubmitting }: FormikActions<IPageFormValues>
  ) => {
    try {
      const result = await updatePage({
        variables: { data: { id: pageId, ...values } },
      })
      if (result) {
        props.history.push(`/blog/${result.data.updatePage.id}`)
      }
    } catch (error) {
      setSubmitting(false)
      message.error(error.message)
    }
  }

  return (
    <div data-testid={PAGE_EDIT_TEST_ID}>
      <H1>Edit Page</H1>
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
