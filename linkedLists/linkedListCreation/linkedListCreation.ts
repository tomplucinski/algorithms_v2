class Node {
  value: number
  prev: Node
  next: Node

  constructor(value: number) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  head: Node
  tail: Node

  constructor() {
    this.head = null
    this.tail = null
  }

  setHead(node: Node) {
    if (!this.head && !this.tail) {
      this.head = node
      this.tail = node
      return
    }

    if (this.containsNodeWithValue(node.value)) {
      node.prev.next = node.next
      node.next.prev = node.prev
    }

    this.head.prev = node
    node.prev = null
    node.next = this.head
    this.head = node
  }

  setTail(node) {}

  insertBefore(node, nodeToInsert) {}

  insertAfter(node, nodeToInsert) {}

  insertAtPosition(position, nodeToInsert) {}

  removeNodesWithValue(value) {}

  remove(node) {}

  containsNodeWithValue(value: number) {
    let currentNode = this.head
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true
      }
      currentNode = currentNode.next
    }
    return false
  }
}
