import { quickSort } from "./quickSort";

describe("quickSort", () => {
  it("sorts array correctly", () => {
    const subject = [8, 5, 2, 9, 5, 6, 3];
    const expected = [2, 3, 5, 5, 6, 8, 9];
    const result = quickSort(subject);
    expect(result).toBe(expected);
  });
});
