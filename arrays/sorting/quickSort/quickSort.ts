// Best O(nlog(n)) time | O(log(n)) space
// Average O(nlog(n)) time | O(log(n)) space
// Worst O(n^2) time | O(log(n)) space

export function quickSort(array: number[]) {
  quickSortHelper(array, 0, array.length - 1)
  return array
}

function quickSortHelper(array: number[], startIdx: number, endIdx: number) {
  if (startIdx >= endIdx) {
    return
  }
  const pivotIdx = startIdx
  let leftIndex = startIdx + 1
  let rightIndex = endIdx

  while (leftIndex <= rightIndex) {
    if (
      array[leftIndex] > array[pivotIdx] &&
      array[rightIndex] < array[pivotIdx]
    ) {
      swap(leftIndex, rightIndex, array)
    }
    if (array[leftIndex] <= array[pivotIdx]) {
      leftIndex++
    }
    if (array[rightIndex] >= array[pivotIdx]) {
      rightIndex--
    }
  }

  swap(pivotIdx, rightIndex, array)
  const leftSubArrayIsSmaller =
    rightIndex - 1 - startIdx < endIdx - (rightIndex + 1)
  if (leftSubArrayIsSmaller) {
    quickSortHelper(array, startIdx, rightIndex - 1)
    quickSortHelper(array, rightIndex + 1, endIdx)
  } else {
    quickSortHelper(array, rightIndex + 1, endIdx)
    quickSortHelper(array, startIdx, rightIndex - 1)
  }

  return array
}

function swap(index1: number, index2: number, array: number[]) {
  let temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}
