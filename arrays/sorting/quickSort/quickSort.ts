export function quickSort(array: number[]) {
  debugger;
  let pIndex = 0;
  let leftIndex = 1;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let pivot = array[pIndex];
    let leftPointer = array[leftIndex];
    let rightPointer = array[rightIndex];
    if (leftPointer > pivot && rightPointer < pivot) {
      swap(leftIndex, rightIndex, array);
      continue;
    }
    if (leftPointer <= pivot) {
      leftIndex++;
      continue;
    }
    if (rightPointer >= pivot) {
      rightIndex--;
      continue;
    }
  }

  swap(pIndex, rightIndex, array);
  const frontArray = array.slice(0, rightIndex);
  const backArray = array.slice(rightIndex + 1);

  if (frontArray.length < backArray.length) {
    if (frontArray.length > 1) {
      quickSort(frontArray);
    }
  } else {
    if (backArray.length > 1) {
      quickSort(backArray);
    }
  }

  return array;
}

function swap(index1: number, index2: number, array: number[]) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
