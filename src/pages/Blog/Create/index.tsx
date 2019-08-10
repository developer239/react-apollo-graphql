import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { H1 } from 'components/Typography/H1'
import { IPageFormValues, PageForm } from 'modules/blog/forms/Page'
import { useCreatePage } from 'modules/blog/hooks/useCreatePage'

export const CreatePagePage: FC<RouteComponentProps> = props => {
  const [createPage] = useCreatePage()

  const handleSubmit = async (values: IPageFormValues) => {
    const result = await createPage({ variables: { data: values } })
    if (result) {
      props.history.push(`/blog/${result.data.createPage.id}`)
    }
  }

  return (
    <>
      <H1>Create Page</H1>
      <PageForm handleSubmit={handleSubmit} />
    </>
  )
}
