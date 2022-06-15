export function sumTwoNumbers(array: number[], targetSum: number) {
  const numbersHash = array.reduce((acc: Record<string, number>, num) => {
    acc[num] = num
    return acc
  }, {})

  return array.filter(num => {
    const remainder = targetSum - num
    if (numbersHash[remainder] !== undefined && num !== remainder) {
      return [num, remainder]
    }
  })
}
