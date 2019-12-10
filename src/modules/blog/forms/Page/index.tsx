import React, { FC } from 'react'
import { Formik, Form, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { TextInput } from 'components/TextInput'
import { Textarea } from 'components/Textarea'
import { FormButton } from 'components/FormButton'

const registerSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  text: Yup.string().required('Required'),
})

export interface IPageFormValues {
  id?: number
  title: string
  text: string
}

export interface IProps {
  initialValues?: IPageFormValues
  handleSubmit: (
    values: IPageFormValues,
    actions?: FormikHelpers<IPageFormValues>
  ) => Promise<void>
}

export const PageForm: FC<IProps> = ({ initialValues, handleSubmit }) => (
  <Formik
    initialValues={initialValues || initialValues}
    validationSchema={registerSchema}
    onSubmit={handleSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <TextInput label="Title" name="title" />
        <Textarea label="Text" name="text" />

        <FormButton htmlType="submit" type="primary" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </FormButton>
      </Form>
    )}
  </Formik>
)
