/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface Me {
  me: Me_me | null;
}
