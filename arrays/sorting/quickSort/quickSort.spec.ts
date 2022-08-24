import { quickSort } from "./quickSort";

describe("quickSort", () => {
  it("sorts array correctly", () => {
    const subject1 = [8, 5, 2, 9, 5, 6, 3];
    const subject2 = [
      4, 1, 5, 0, -9, -3, -3, 9, 3, -4, -9, 8, 1, -3, -7, -4, -9, -1, -7, -2,
      -7, 4,
    ];
    const subject3 = [-7, 4, -6, -10, 2, 9, -9];
    const expected1 = [2, 3, 5, 5, 6, 8, 9];
    const expected2 = [
      -9, -9, -9, -7, -7, -7, -4, -4, -3, -3, -3, -2, -1, 0, 1, 1, 3, 4, 4, 5,
      8, 9,
    ];
    const expected3 = [-10, -9, -7, -6, 2, 4, 9];
    const result1 = quickSort(subject1);
    const result2 = quickSort(subject2);
    const result3 = quickSort(subject3);
    expect(result1).toStrictEqual(expected1);
    expect(result2).toStrictEqual(expected2);
    expect(result3).toStrictEqual(expected3);
  });
});
