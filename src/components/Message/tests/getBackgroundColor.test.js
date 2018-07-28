import { getBackgroundColor } from '../index'


describe('getBackgroundColor', () => {
  const createFakeProps = type => ({
    type,
    theme: {
      color: {
        lightGreen: 'a',
        lightRed: 'b',
        lightGrey: 'c',
      },
    },
  })

  it('returns correct success color', () => {
    const colors = getBackgroundColor(createFakeProps('success'))
    expect(colors).toEqual('a')
  })

  it('returns correct error color', () => {
    const colors = getBackgroundColor(createFakeProps('error'))
    expect(colors).toEqual('b')
  })

  it('returns correct default color', () => {
    const colors = getBackgroundColor(createFakeProps())
    expect(colors).toEqual('c')
  })
})
