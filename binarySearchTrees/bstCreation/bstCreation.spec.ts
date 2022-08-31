import { BST } from './bstCreation'

describe('BST Creation', () => {
  it('private methods work correctly', () => {
    const root = new BST(10)
    root.left = new BST(5)
    root.left.left = new BST(2)
    root.left.left.left = new BST(1)
    root.left.right = new BST(5)
    root.right = new BST(15)
    root.right.left = new BST(13)
    root.right.left.right = new BST(14)
    root.right.right = new BST(22)

    root.insert(12)
    expect(root.right.left.left.value).toBe(12)

    root.remove(10)
    expect(root.contains(10)).toBe(false)
    expect(root.value).toBe(12)

    expect(root.contains(15)).toBe(true)
  })
})
