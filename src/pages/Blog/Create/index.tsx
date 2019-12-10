import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { message } from 'antd'
import { FormikHelpers } from 'formik'
import { H1 } from 'components/Typography/H1'
import { IPageFormValues, PageForm } from 'modules/blog/forms/Page'
import { useCreatePage } from 'modules/blog/hooks/useCreatePage'

export const PAGE_CREATE_TEST_ID = 'create-page'

export const CreatePagePage: FC<RouteComponentProps> = props => {
  const [createPage] = useCreatePage()

  const handleSubmit = async (
    values: IPageFormValues,
    { setSubmitting }: FormikHelpers<IPageFormValues>
  ) => {
    try {
      const result = await createPage({ variables: { data: values } })
      if (result) {
        props.history.push(`/blog/${result.data.createPage.id}`)
      }
    } catch (error) {
      setSubmitting(false)
      await message.error(error.message)
    }
  }

  return (
    <div data-testid={PAGE_CREATE_TEST_ID}>
      <H1>Create Page</H1>
      <PageForm handleSubmit={handleSubmit} />
    </div>
  )
}
