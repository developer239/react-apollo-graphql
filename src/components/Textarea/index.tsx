import React, { FC } from 'react'
import { ErrorMessage, Field, FieldProps } from 'formik'
import { StyledTextArea } from './styled'
import { FormElementError } from '../FormElementError'
import { FormElementLabel } from '../FormElementLabel'

interface IProps {
  name: string
  label: string
}

export const Textarea: FC<IProps> = ({ name, label }) => (
  <FormElementLabel>
    {label}:
    <Field
      name={name}
      render={({ field }: FieldProps<string>) => (
        <StyledTextArea
          placeholder={label.toLowerCase() || name}
          autosize={{ minRows: 6, maxRows: 10 }}
          {...field}
        />
      )}
    />
    <ErrorMessage
      name={name}
      render={message => <FormElementError>{message}</FormElementError>}
    />
  </FormElementLabel>
)
