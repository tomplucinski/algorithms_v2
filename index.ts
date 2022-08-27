import { sumTwoNumbers } from './arrays/sumTwoNumbers'
import { bubbleSort } from './arrays/sorting/bubbleSort'
import { threeNumberSort } from './arrays/sorting/threeNumberSort'

const sumTwoNumbersResult = sumTwoNumbers([3, 5, -4, 8, 11, 1, -1, 6], 10)
console.log('SumTwoNumbers:', sumTwoNumbersResult)

const bubbleSortResult = bubbleSort([8, 5, 2, 9, 5, 6, 3])
console.log('BubbleSort:', bubbleSortResult)

const threeNumberSortResult = threeNumberSort(
  [0, 10, 10, 10, 10, 10, 25, 25, 25, 25, 25],
  [25, 10, 0]
)
console.log('ThreeNumberSort', threeNumberSortResult)
