import { BST } from "../types";

export function findClosestValueInBst(tree: BST, target: number) {
  let closestNumToTarget = tree.value;
  let direction = null;

  if (tree.value === target || (!tree.left && !tree.right)) {
    return tree.value;
  }

  if (tree.value > target) {
    direction = "left";
  } else {
    direction = "right";
  }

  if (direction === "left") {
    if (!tree.left) {
      return tree.value;
    }
    const leftValue = findClosestValueInBst(tree.left, target);
    const newDiff = findDiff(leftValue, target);
    const oldDiff = findDiff(closestNumToTarget, target);
    if (newDiff < oldDiff) {
      closestNumToTarget = leftValue;
    }
  } else if (direction === "right") {
    if (!tree.right) {
      return tree.value;
    }
    const rightValue = findClosestValueInBst(tree.right, target);
    const newDiff = findDiff(rightValue, target);
    const oldDiff = findDiff(closestNumToTarget, target);
    if (newDiff < oldDiff) {
      closestNumToTarget = rightValue;
    }
  }

  return closestNumToTarget;
}

function findDiff(num1: number, num2: number) {
  return Math.abs(num1 - num2);
}
