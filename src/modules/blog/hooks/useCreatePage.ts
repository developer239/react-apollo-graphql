import { useMutation } from '@apollo/react-hooks'
import {
  CreatePage,
  CreatePage_createPage,
  CreatePageVariables,
} from '../gql/__generated__/CreatePage'
import { CREATE_PAGE_MUTATION } from '../gql'
import { updateListPages } from '../cache/updateListPages'

export const useCreatePage = () =>
  useMutation<CreatePage, CreatePageVariables>(CREATE_PAGE_MUTATION, {
    update: updateListPages<CreatePage_createPage>(
      'createPage',
      (listPages, createPage) => listPages.concat([createPage])
    ),
  })
