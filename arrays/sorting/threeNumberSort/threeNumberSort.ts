// Return new array
export function threeNumberSort(array: number[], order: number[]) {
  const map: { [key: string]: number } = {};
  const sortedArray: number[] = [];

  array.forEach((num) => {
    if (order.includes(num)) {
      if (!map[num]) {
        map[num] = 1;
      } else {
        map[num] += 1;
      }
    }
  });

  order.forEach((num) => {
    while (map[num] > 0) {
      sortedArray.push(num);
      map[num] -= 1;
    }
  });

  return sortedArray;
}

// Sort in place
export function threeNumberSortInPlace(array: number[], order: number[]) {
  const map: { [key: string]: number } = {};
  array.forEach((num, i) => {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num] += 1;
    }
  });

  let orderIndex: number = 0;
  let index: number = 0;
  while (true) {
    let current = order[orderIndex];
    if (map[current]) {
      array[index] = current;
      map[current] -= 1;
      index++;
    } else {
      if (orderIndex < 2) {
        orderIndex++;
      } else {
        break;
      }
    }
  }

  return array;
}
