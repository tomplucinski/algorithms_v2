import { bubbleSort } from './bubbleSort'

describe('Bubble sort', () => {
  it('Sorts arrays correctly', () => {
    const input = [8, 5, 2, 9, 5, 6, 3]
    expect(bubbleSort(input)).toStrictEqual([2, 3, 5, 5, 6, 8, 9])
  })
})
