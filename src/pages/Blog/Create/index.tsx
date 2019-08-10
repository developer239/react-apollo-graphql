import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { message } from 'antd'
import { H1 } from 'components/Typography/H1'
import { IPageFormValues, PageForm } from 'modules/blog/forms/Page'
import { useCreatePage } from 'modules/blog/hooks/useCreatePage'
import { FormikActions } from 'formik'

export const CreatePagePage: FC<RouteComponentProps> = props => {
  const [createPage] = useCreatePage()

  const handleSubmit = async (
    values: IPageFormValues,
    { setSubmitting }: FormikActions<IPageFormValues>
  ) => {
    try {
      const result = await createPage({ variables: { data: values } })
      if (result) {
        props.history.push(`/blog/${result.data.createPage.id}`)
      }
    } catch (error) {
      setSubmitting(false)
      message.error(error.message)
    }
  }

  return (
    <>
      <H1>Create Page</H1>
      <PageForm handleSubmit={handleSubmit} />
    </>
  )
}
