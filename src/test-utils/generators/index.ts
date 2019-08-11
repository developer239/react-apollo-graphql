import faker from 'faker'

export const createPage = (id: number) => ({
  id,
  title: faker.lorem.words(3),
  text: faker.lorem.text(),
})

export type MockPageType = ReturnType<typeof createPage>

export const createUser = (id: number) => ({
  id,
  firstName: faker.name.findName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
})

export type MockUserType = ReturnType<typeof createUser>

export const createUserWithPages = (
  userId: number,
  pagesIds: number[] = []
) => ({
  ...createUser(userId),
  pages: pagesIds.map(createPage),
})

export type MockUserWithPages = ReturnType<typeof createUserWithPages>

export const createPageWithUser = (
  pageId: number,
  userId: number,
  pagesIds: number[] = []
) => ({
  ...createPage(pageId),
  user: createUserWithPages(userId, pagesIds),
})

export type MockPageWithUserType = ReturnType<typeof createPageWithUser>
