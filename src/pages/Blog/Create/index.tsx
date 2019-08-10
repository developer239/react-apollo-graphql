import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
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
    <div>
      <h1>Create Page</h1>
      <PageForm handleSubmit={handleSubmit} />
    </div>
  )
}
