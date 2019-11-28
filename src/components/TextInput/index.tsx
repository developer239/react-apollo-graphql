import React, { FC } from 'react'
import { ErrorMessage, Field, FieldProps } from 'formik'
import { Description } from 'components/FormElementDescription'
import { Input, Icon } from './styled'
import { FormElementError } from '../FormElementError'
import { FormElementLabel } from '../FormElementLabel'

interface IProps {
  iconType?: string
  name: string
  label?: string
  type?: 'password' | 'hidden' | 'number'
  description?: string
}

export const TextInput: FC<IProps> = ({
  iconType,
  name,
  label,
  type,
  description,
}) => (
  <Field
    name={name}
    render={({
      field,
      form: { errors, touched },
    }: FieldProps<{ [key: string]: string }>) => (
      <>
        <FormElementLabel
          validateStatus={errors[name] && touched[name] && 'error'}
        >
          <label>
            {label}:
            <Input
              size="large"
              prefix={iconType && <Icon type={iconType} />}
              placeholder={(label && label.toLowerCase()) || name}
              type={type}
              {...(field as any)}
            />
          </label>
          {description && <Description>{description}</Description>}
        </FormElementLabel>
        <ErrorMessage
          name={name}
          render={message => <FormElementError>{message}</FormElementError>}
        />
      </>
    )}
  />
)
