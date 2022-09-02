import { threeNumberSort } from './threeNumberSort'

describe('Three Number Sort', () => {
  it('Sorts arrays correctly', () => {
    const array = [1, 0, 0, -1, -1, 0, 1, 1]
    const order = [0, 1, -1]
    const expected = [0, 0, 0, 1, 1, 1, -1, -1]
    const actual = threeNumberSort(array, order)
    expect(actual).toStrictEqual(expected)
  })
})
