/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeletePage
// ====================================================

export interface DeletePage_deletePage {
  __typename: "Page";
  id: string;
  title: string;
  text: string;
}

export interface DeletePage {
  deletePage: DeletePage_deletePage;
}

export interface DeletePageVariables {
  id: number;
}
