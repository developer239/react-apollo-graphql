import faker from 'faker'

export const createPage = (id: number) => ({
  id,
  title: faker.lorem.words(3),
  text: faker.lorem.text(),
})

export type MockPageType = ReturnType<typeof createPage>
