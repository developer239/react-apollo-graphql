import React, { FC } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  title: '',
  text: '',
}

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
  handleSubmit: (values: IPageFormValues) => Promise<void>
}

export const PageForm: FC<IProps> = props => (
  <Formik
    initialValues={props.initialValues || initialValues}
    validationSchema={registerSchema}
    onSubmit={props.handleSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <div>
          <label>
            Title:
            <Field name="title" />
          </label>
          <ErrorMessage name="title" />
        </div>

        <div>
          <label>
            Text:
            <Field name="text" type="text" />
            <ErrorMessage name="text" />
          </label>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </Form>
    )}
  </Formik>
)
