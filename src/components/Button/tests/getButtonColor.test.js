import { getButtonColor } from '../index'


describe('getButtonColor', () => {
  const createFakeProps = bgType => ({
    bgType,
    theme: {
      color: {
        lightGreen: 'a',
        darkGreen: 'b',
        lightRed: 'c',
        darkRed: 'd',
        lightGrey: 'e',
        darkGrey: 'f',
      },
    },
  })

  it('returns correct success colors', () => {
    const colors = getButtonColor(createFakeProps('success'))
    expect(colors).toEqual({
      background: 'a',
      hover: 'b',
    })
  })

  it('returns correct error colors', () => {
    const colors = getButtonColor(createFakeProps('error'))
    expect(colors).toEqual({
      background: 'c',
      hover: 'd',
    })
  })

  it('returns correct default colors', () => {
    const colors = getButtonColor(createFakeProps())
    expect(colors).toEqual({
      background: 'e',
      hover: 'f',
    })
  })
})
