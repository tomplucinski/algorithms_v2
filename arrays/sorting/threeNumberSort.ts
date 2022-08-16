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
