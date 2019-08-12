import React, { FC } from 'react'
import { ErrorMessage, Field, FieldProps } from 'formik'
import { Input, Icon } from './styled'
import { FormElementError } from '../FormElementError'
import { FormElementLabel } from '../FormElementLabel'

interface IProps {
  iconType?: string
  name: string
  label?: string
  type?: 'password' | 'hidden'
}

export const TextInput: FC<IProps> = ({ iconType, name, label, type }) => (
  <FormElementLabel isHidden={type === 'hidden'}>
    {label}:
    <Field
      name={name}
      render={({ field }: FieldProps<string>) => (
        <Input
          size="large"
          prefix={iconType && <Icon type={iconType} />}
          placeholder={(label && label.toLowerCase()) || name}
          type={type}
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
