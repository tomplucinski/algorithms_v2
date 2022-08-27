export function bubbleSort(array: number[]) {
  while (true) {
    let swap: boolean = false
    let arrayLength: number = array.length
    for (let i = 0; i < arrayLength; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        swap = true
      }
    }
    arrayLength--
    if (swap === false) {
      break
    }
  }
  return array
}
